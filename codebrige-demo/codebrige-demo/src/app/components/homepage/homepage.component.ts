import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../core/news-feed/news-feed.service';
import { NewsBlock } from '../shared/types/news-block';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  private newsBlocks: NewsBlock[] = [];

  constructor(private newsFeedService: NewsFeedService){

  }

  ngOnInit(): void {
    this.initHomepage();  
  }

  initHomepage(){
    this.newsFeedService.getNewsFeed().subscribe((newsBlocks: NewsBlock[]) => {
      this.newsBlocks = newsBlocks;
    });
  }

  getNewsBlocks(){
    return this.newsBlocks;
  }

  getAmountOfNews(){
    return this.newsBlocks.length;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}

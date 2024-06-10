import { Component, OnChanges, OnInit } from '@angular/core';
import { NewsFeedService } from '../core/news-feed/news-feed.service';
import { NewsBlock } from '../shared/types/news-block';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  $news!: Observable<NewsBlock[]>;
  searchText: string = '';

  constructor(private newsFeedService: NewsFeedService){

  }

  ngOnInit(): void {
    this.initHomepage();  
  }

  initHomepage(){
    this.$news = this.newsFeedService.getNewsFeed();
  }

  public onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value;
  }

  onHighlightDetected(event: boolean, currentNewsBlock: NewsBlock){
    currentNewsBlock.showState = !event;
  }
}

import { Component, OnChanges, OnInit } from '@angular/core';
import { NewsFeedService } from '../core/news-feed/news-feed.service';
import { NewsBlock } from '../shared/types/news-block';
import { Observable } from 'rxjs';
import { SearchNewsService } from '../core/search-news/search-news.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  $news!: Observable<NewsBlock[]>;
  searchText: string = '';

  constructor(private newsFeedService: NewsFeedService, private searchNewsService: SearchNewsService){

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
    this.$news = this.searchNewsService.search(this.searchText); 
  }
}

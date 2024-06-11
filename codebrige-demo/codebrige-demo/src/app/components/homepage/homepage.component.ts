import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../core/news-feed/news-feed.service';
import { NewsBlock } from '../shared/types/news-block';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchNewsService } from '../core/search-news/search-news.service';
import { SortNewsService } from '../core/sort-news/sort-news.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  $news!: Observable<NewsBlock[]>;
  searchText: string = '';

  private newsSubject: BehaviorSubject<NewsBlock[]> = new BehaviorSubject<NewsBlock[]>([]);

  constructor(
    private newsFeedService: NewsFeedService, 
    private searchNewsService: SearchNewsService,
    private sortNewsService: SortNewsService
  ){
    this.$news = this.newsSubject.asObservable();
  }

  ngOnInit(): void {
    this.initHomepage();  
  }

  initHomepage(){
    this.newsFeedService.getNewsFeed().subscribe((news: NewsBlock[]) => {
      this.newsSubject.next(news);
    });
  }

  getNewsSubject(){
    return this.newsSubject.getValue();
  }

  public onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value;
    this.searchNewsService.search(this.searchText).subscribe((news: NewsBlock[]) => {
      this.newsSubject.next(news);
    });; 
  }

  updateHighlightAmount(index: number, titleHighlightAmount: number, descriptionHighlightAmount: number, news: NewsBlock[]): void {

    this.newsSubject.next(this.sortNewsService.updateHighlightAmount(index, titleHighlightAmount, descriptionHighlightAmount, news));
  }
}

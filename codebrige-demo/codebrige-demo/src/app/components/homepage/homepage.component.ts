import {Component, inject, OnInit} from '@angular/core';
import { ArticlesService } from '../../../core/articles/articles.service';
import { Article } from '../../../shared/types/article';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchArticlesService } from '../../../core/search-articles/search-articles.service';
import { SortArticlesService } from '../../../core/sort-articles/sort-articles.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  articles$: Observable<Article[]>;
  searchText: string = '';

  private articlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);

  private articlesService = inject(ArticlesService);
  private searchArticlesService = inject(SearchArticlesService);
  private sortArticlesService = inject(SortArticlesService);

  constructor(){
    this.articles$ = this.articlesSubject.asObservable();
  }

  ngOnInit(): void {
    this.initHomepage();
  }

  initHomepage():void{
    this.articlesService.getArticles().subscribe((news: Article[]) => {
      this.articlesSubject.next(news);
    });
  }

  getArticleSubject():Article[]{
    return this.articlesSubject.getValue();
  }

  public onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value;
    this.searchArticlesService.searchArticlesByText(this.searchText).subscribe((news: Article[]) => {
      this.articlesSubject.next(news);
    });
  }

  updateHighlightTextAmount(index: number, titleHighlightAmount: number, descriptionHighlightAmount: number, news: Article[]): void {

    this.articlesSubject.next(this.sortArticlesService.updateHighlightTextAmount(index, titleHighlightAmount, descriptionHighlightAmount, news));
  }
}

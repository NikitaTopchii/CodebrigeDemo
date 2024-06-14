import {Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Article } from '../../../shared/types/article';
import { Route, Router } from '@angular/router';
import { SortArticlesService } from '../../../core/sort-articles/sort-articles.service';
import {HighlightTextAmount} from "../../../shared/types/highlightTextAmount";

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnChanges{

  public search: string = '';

  private sortArticlesService = inject(SortArticlesService);
  private router = inject(Router)

  @Input() currentArticleData!: Article;
  @Input() searched: string = '';
  @Output() highlightDetected: EventEmitter<HighlightTextAmount> = new EventEmitter<HighlightTextAmount>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searched']) {
      this.search = changes['searched'].currentValue;
    }
    this.getHighlightedText();
  }

  private getHighlightedText(): void {
    this.highlightDetected.emit(this.sortArticlesService.getHighlightedText(this.currentArticleData, this.search));
  }

  navigateToArticle():void{
    this.router.navigate(['article', { id: this.currentArticleData.id }]);
  }
}

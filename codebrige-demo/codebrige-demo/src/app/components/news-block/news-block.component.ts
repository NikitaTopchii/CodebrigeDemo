import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NewsBlock } from '../shared/types/news-block';
import { Route, Router } from '@angular/router';
import { SortNewsService } from '../core/sort-news/sort-news.service';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit, OnChanges{

  public search: string = '';
  public hasHighlightedText: boolean = false;

  @Input() currentNewsBlockData!: NewsBlock;
  @Input() searched: string = '';
  @Output() highlightDetected: EventEmitter<{amountOfHighlightTextTitle: number, amountOfHighlightTextDescription: number}> = new EventEmitter<{amountOfHighlightTextTitle: number, amountOfHighlightTextDescription: number}>();

  constructor(private router: Router, private sortNewsService: SortNewsService){
      
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searched']) {
      this.search = changes['searched'].currentValue;
    }
    this.checkHighlightedText();
  }

  checkHighlightedText(): void {

    this.highlightDetected.emit(this.sortNewsService.checkHighlightedText(this.currentNewsBlockData, this.search));
  }

  navigateToArticle(){
    this.router.navigate(['article', { id: this.currentNewsBlockData.id }]);
  }
}

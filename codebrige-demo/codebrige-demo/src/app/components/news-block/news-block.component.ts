import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NewsBlock } from '../shared/types/news-block';

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
  @Output() highlightDetected: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searched']) {
      this.search = changes['searched'].currentValue;
    }
    this.checkHighlightedText(); // Викликаємо функцію для перевірки наявності виділеного тексту
  }

  checkHighlightedText(): void {
    // Перевіряємо, чи є виділений текст у заголовку або у короткому описі
    if (this.currentNewsBlockData.title.includes(this.search) || this.currentNewsBlockData.shortDescription.includes(this.search)) {
      this.hasHighlightedText = true;
    } else {
      this.hasHighlightedText = false;
    }
    // Висилаємо подію про наявність виділеного тексту
    this.highlightDetected.emit(this.hasHighlightedText);
  }
}

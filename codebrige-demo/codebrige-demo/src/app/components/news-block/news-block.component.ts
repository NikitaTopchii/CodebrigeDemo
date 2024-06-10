import { Component, Input } from '@angular/core';
import { NewsBlock } from '../shared/types/news-block';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent {

  @Input() currentNewsBlockData!: NewsBlock;


}

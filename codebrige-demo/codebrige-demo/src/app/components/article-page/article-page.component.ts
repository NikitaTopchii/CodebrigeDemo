
import { NewsFeedService } from '../core/news-feed/news-feed.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit{

  private currentNewsBlockId: number = 0;

  currentNewsBlockData: any;

  constructor(private newsFeedService: NewsFeedService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.initArticle();
  }

  initArticle(){
    this.route.params.subscribe( params => {
      this.currentNewsBlockId = params['id'];
    })
    this.getCurrentNewsBlockData();
  }

  getCurrentNewsBlockData(){
    this.newsFeedService.getNewsBlockById(this.currentNewsBlockId).subscribe((newsBlock) => {
      this.currentNewsBlockData = newsBlock;
    });
  }
}

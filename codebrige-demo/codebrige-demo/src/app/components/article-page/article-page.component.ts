
import { ArticlesService } from '../../../core/articles/articles.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, inject, OnInit} from '@angular/core';
import {Article} from "../../../shared/types/article";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit{

  private currentArticleId: number = 0;

  currentArticleData: Article | undefined;

  private articlesService = inject(ArticlesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router)

  ngOnInit(): void {
    this.initArticle();
  }

  initArticle():void{
    this.route.params.subscribe( params => {
      this.currentArticleId = params['id'];
    })
    this.getCurrentArticleData();
  }

  private getCurrentArticleData():void{
    this.articlesService.getArticleById(this.currentArticleId).subscribe((newsBlock) => {
      this.currentArticleData = newsBlock;
    });
  }

  backButton():void{
    this.router.navigate(['']);
  }
}

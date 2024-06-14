import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { API_URL } from '../../shared/application-context';
import { map } from 'rxjs';
import { ENDPOINTS } from '../../shared/endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private http = inject(HttpClient);

  getArticles(){
    return this.http.get(API_URL + ENDPOINTS.ARTICLES, { params: { limit: 10 } })
    .pipe(map((response: any) => response.results))
    .pipe(map((news: any) => {
      return news.map((article: any) => {
        return {
          ...article,
          titleHighlightAmount: 0,
          descriptionHighlightAmount: 0
        }
      })
    }));
  }

  getArticleById(id: number){
    return this.http.get(API_URL + ENDPOINTS.ARTICLES + `/${id}/` )
    .pipe(map((article: any) => {
      return {
        ...article,
        titleHighlightAmount: 0,
        descriptionHighlightAmount: 0
      }
    }));
  }
}

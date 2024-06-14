import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/application-context';
import { ENDPOINTS } from '../../shared/endpoints/endpoints';
import { map } from 'rxjs';
import {inject} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SearchArticlesService {

  private http = inject(HttpClient);

  searchArticlesByText(searchText: string){
    return this.http.get(API_URL + ENDPOINTS.ARTICLES, { params: {
      title_contains_all: searchText,
      summary_contains_all: searchText
    } })
    .pipe(map((response: any) => response.results))
    .pipe(map((news: any) => {
      return news.map((newsBlock: any) => {
        return {
          id: newsBlock.id,
          imageUrl: newsBlock.image_url,
          title: newsBlock.title,
          publishDate: newsBlock.published_at,
          shortDescription: newsBlock.summary,
          titleHighlightAmount: 0,
          descriptionHighlightAmount: 0
        }
      })
    }));
  }
}

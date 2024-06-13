import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from '../../shared/application-context';
import { map } from 'rxjs';
import { DateConvertorService } from '../data-convertor/date-convertor.service';
import { ENDPOINTS } from '../../shared/endpoints/endpoints';
import { BaseHttpClientService } from '../base-http-client/base-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService extends BaseHttpClientService{

  constructor(private http: HttpClient, private dateConvertor: DateConvertorService) {
    super();
   }

  getNewsFeed(){
    return this.http.get(api_url + ENDPOINTS.ARTICLES, { params: { limit: 10 } })
    .pipe(map((response: any) => response.results))
    .pipe(map((news: any) => {
      return news.map((newsBlock: any) => {
        return {
          id: newsBlock.id,
          imageUrl: newsBlock.image_url,
          title: newsBlock.title,
          publishDate: this.dateConvertor.getFormattedDate(newsBlock.published_at),
          shortDescription: newsBlock.summary,
          titleHighlightAmount: 0,
          descriptionHighlightAmount: 0
        }
      })
    }));
  }

  getNewsBlockById(id: number){
    return this.http.get(api_url + ENDPOINTS.ARTICLES + `/${id}/` )
    .pipe(map((newsBlock: any) => {
      return {
        id: newsBlock.id,
        imageUrl: newsBlock.image_url,
        title: newsBlock.title,
        publishDate: this.dateConvertor.getFormattedDate(newsBlock.published_at),
        shortDescription: newsBlock.summary,
        titleHighlightAmount: 0,
        descriptionHighlightAmount: 0
      }
    }));
  }
}
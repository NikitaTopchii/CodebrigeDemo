import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from '../../shared/application-context';
import { map } from 'rxjs';
import { DateConvertorService } from '../data-convertor/date-convertor.service';
import { ENDPOINTS } from '../../shared/endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http: HttpClient, private dateConvertor: DateConvertorService) { }

  getNewsFeed(){
    return this.http.get(api_url + ENDPOINTS.BLOGS)
    .pipe(map((response: any) => response.results))
    .pipe(map((news: any) => {
      return news.map((newsBlock: any) => {
        return {
          imageUrl: newsBlock.image_url,
          title: newsBlock.title,
          publishDate: this.dateConvertor.getFormattedDate(newsBlock.published_at),
          shortDescription: newsBlock.summary
        }
      })
    }));
  }
}
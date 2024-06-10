import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from '../../shared/application-context';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http: HttpClient) { }

  getNewsFeed(){
    return this.http.get(api_url + 'blogs')
    .pipe(map((response: any) => response.results))
    .pipe(map((news: any) => {
      return news.map((newsBlock: any) => {
        return {
          imageUrl: newsBlock.image_url,
          title: newsBlock.title,
          publishDate: newsBlock.published_at,
          shortDescription: newsBlock.summary
        }
      })
    }));
  }
}

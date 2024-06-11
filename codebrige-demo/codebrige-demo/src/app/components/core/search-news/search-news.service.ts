import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpClientService } from '../base-http-client/base-http-client.service';
import { api_url } from '../../shared/application-context';
import { ENDPOINTS } from '../../shared/endpoints/endpoints';
import { map } from 'rxjs';
import { DateConvertorService } from '../data-convertor/date-convertor.service';

@Injectable({
  providedIn: 'root'
})
export class SearchNewsService extends BaseHttpClientService {

  constructor(private http: HttpClient, private dateConvertor: DateConvertorService) {
    super();
   }

  search(searchText: string){
    const formData = new FormData();

    formData.append('title_contains_all', searchText)
    formData.append('summary_contains_all', searchText)

    return this.http.get(api_url + ENDPOINTS.ARTICLES, { params: this.createHttpParams(formData) })
    .pipe(map((response: any) => response.results))
    .pipe(map((news: any) => {
      return news.map((newsBlock: any) => {
        return {
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
}

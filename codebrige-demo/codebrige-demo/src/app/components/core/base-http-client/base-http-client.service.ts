import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpClientService {

  constructor() { }

  protected createHttpParams(formData: FormData): HttpParams {
    let params = new HttpParams();
    formData.forEach((value, key) => {
      params = params.append(key, value as string);
    });
    return params;
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) { }

  // getData(url, url1) {
  //   return this.http.get(`${API_URL}${url}?api_key=${API_KEY}${url1}`);
  // }

  getData(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPopular} from '../model/IPopular';

@Injectable()
export class MovieService {
  private apiKey = '?api_key=e378538e9214653e61d33f7d1a1dc0d2';
 // private apiUrl:string = 'https://api.themoviedb.org/';
  imageBaseUrl = 'https://image.tmdb.org/t/p/';
  url:string = 'https://api.themoviedb.org/3/movie/popular?api_key=e378538e9214653e61d33f7d1a1dc0d2&sort_by=popularity.desc';

  constructor(private httpClient: HttpClient,) {
  }

  getUrl() {
   // return this.httpClient.get(this.apiUrl + '3/movie/' + 'popular' + this.apiKey + '&sort_by=popularity.desc');
  }

  getImageBaseUrl() {
     return this.imageBaseUrl;
  }

  getPopularMovies() {
    return this.httpClient.get(this.url);
  }
}

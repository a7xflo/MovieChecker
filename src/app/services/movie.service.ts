import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovieApiResponse } from '../model/IMovieApiResponse';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '?api_key=e378538e9214653e61d33f7d1a1dc0d2';
  url: string = 'https://api.themoviedb.org/3/movie/popular?api_key=e378538e9214653e61d33f7d1a1dc0d2&sort_by=popularity.desc';
  

  constructor(private httpClient: HttpClient) {
  }

  getPopularMovies() {
    return this.httpClient.get<IMovieApiResponse>(this.url);
  }

  getSearchedMovies(searchValue) {
    let searchUrlPath = this.createSearchURL(searchValue);
    console.log(searchUrlPath);
    return this.httpClient.get<IMovieApiResponse>(searchUrlPath);
  }

  createSearchURL (searchValue) {
    let urlFirstPart:string = "https://api.themoviedb.org/3/search/movie?api_key=e378538e9214653e61d33f7d1a1dc0d2&language=en-US&query=%27";
    let urlSecondPart:string = "%27&page=1&include_adult=false";
    let searchURL: string = urlFirstPart + searchValue + urlSecondPart;
    return searchURL;
  }
}
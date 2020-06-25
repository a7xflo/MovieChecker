import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovieApiResponse } from '../model/IMovieApiResponse';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root',
})

export class MovieService {
  popularurl: string = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&sort_by=popularity.desc`;
  topratedurl: string = `https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.apiKey}&sort_by=popularity.desc`;

  constructor(private httpClient: HttpClient) {
  }

  getPopularMovies() {
    return this.httpClient.get<IMovieApiResponse>(this.popularurl);
  }

  getTopratedMovies() {
    return this.httpClient.get<IMovieApiResponse>(this.topratedurl);
  }

  getSearchedMovies(searchValue) {
    let searchUrlPath = this.createSearchURL(searchValue);
    console.log(searchUrlPath);
    return this.httpClient.get<IMovieApiResponse>(searchUrlPath);
  }

  createSearchURL(searchValue) {
    let urlFirstPart: string = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&language=en-US&query=%27`;
    let urlSecondPart: string = "%27&page=1&include_adult=true";
    let searchURL: string = urlFirstPart + searchValue + urlSecondPart;
    return searchURL;
  }
}
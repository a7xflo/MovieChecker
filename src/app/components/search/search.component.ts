import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../model/IMovie';
import { IMovieApiResponse } from 'src/app/model/IMovieApiResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  private searchPhrase = "";
  public textIfEmpty = "";

  constructor(
    private movieService: MovieService,
    route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      this.searchPhrase = params.key;
      this.loadSearchedMovies();
    });
  }

  searchedMovies: IMovie[];

  loadSearchedMovies() {
    console.log("loading searched Movies");
    this.movieService.getSearchedMovies(this.searchPhrase)
      .subscribe((apiResponse: IMovieApiResponse) => {
        if (apiResponse != null) {
          this.searchedMovies = apiResponse.results;
        }
        else {
          if (apiResponse.total_results = 0){
            console.log("No Movies have been found");
          }
        }
      });
    
  }
}
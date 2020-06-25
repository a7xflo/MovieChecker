import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../model/IMovie';
import { IMovieApiResponse } from 'src/app/model/IMovieApiResponse';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  topratedMovies: IMovie[];

  ngOnInit(): void {
    this.loadTopratedMovies();
  }

  loadTopratedMovies() {
    console.log("loading toprated Movies")
    this.movieService.getTopratedMovies()
      .subscribe((apiResponse: IMovieApiResponse) => {
        if (apiResponse != null) {
          this.topratedMovies = apiResponse.results;
        }
      });
  }

}

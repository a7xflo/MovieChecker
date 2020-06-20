import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../model/IMovie';
import { IMovieApiResponse } from 'src/app/model/IMovieApiResponse';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  popularMovies: IMovie[];

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    console.log("loading popular Movies")
    this.movieService.getPopularMovies()
      .subscribe((apiResponse: IMovieApiResponse) => {
        if (apiResponse != null) {
          console.log(apiResponse.results);
          this.popularMovies = apiResponse.results;
        }
      });
  }
}
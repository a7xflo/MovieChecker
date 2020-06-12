import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IPopular } from '../../model/IPopular';
import { IMovieApiRespone } from 'src/app/model/IMovieApiRespone';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  popularMovies: IPopular[];

  ngOnInit(): void {
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies()
      .subscribe((apiRespose: IMovieApiRespone) => {
        if (apiRespose != null) {
          this.popularMovies = apiRespose.results;
        }
      });
  }
}

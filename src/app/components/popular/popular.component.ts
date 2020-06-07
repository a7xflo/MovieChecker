import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {IPopular} from '../../model/IPopular';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private movieService: MovieService) { }

iPopular: IPopular;

  ngOnInit(): void{
    this.loadPopularMovies()
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies()
      .subscribe((iPopular: IPopular) => {
        this.iPopular = {...iPopular};
      });
  }

}

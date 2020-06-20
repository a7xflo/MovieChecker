import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../model/IMovie';
import { IMovieApiResponse } from 'src/app/model/IMovieApiResponse';
import { Injectable } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService: MovieService, private navbar: NavbarComponent) {
   }

  searchedMovies: IMovie[];
  searchvalue: string;

  ngOnInit(): void {
    this.searchvalue = this.navbar.searchPhrase;//this.navbar.getSearchPhrase();
    console.log(this.searchvalue);
    this.loadSearchedMovies(this.searchvalue);
  }

  loadSearchedMovies(searchvalue) {
   // searchvalue = this.navbar.getSearchPhrase();
    console.log("loading searched Movies");
    console.log("searchComponent " + searchvalue);
    this.movieService.getSearchedMovies(searchvalue)
      .subscribe((apiResponse: IMovieApiResponse) => {
        if (apiResponse != null) {
          console.log("values of searched and found movies");
          console.log(apiResponse.results);
          this.searchedMovies = apiResponse.results;
        }
        else {
          console.log("no api response for searchMovies");
        }
      });
  }
}
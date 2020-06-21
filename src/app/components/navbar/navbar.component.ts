import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 @Input() public searchPhrase:string;

  constructor() { }

  ngOnInit(): void {
  }

  getSearchPhrase () {
    console.log("Searchfield:");
    console.log(this.searchPhrase);
    return this.searchPhrase;   
  }
}
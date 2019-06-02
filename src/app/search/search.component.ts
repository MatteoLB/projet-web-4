import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // complete if some new games are added later on

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/search/overwatch']);
  }

}

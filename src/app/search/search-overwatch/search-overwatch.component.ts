import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-overwatch',
  templateUrl: './search-overwatch.component.html',
  styleUrls: ['./search-overwatch.component.css']
})
export class SearchOverwatchComponent implements OnInit {

  charactersRole: string = 'ALL';

  constructor() { }

  ngOnInit() {
  }

  searchTank()
  {
    this.charactersRole = this.charactersRole == 'TANK' ? 'ALL' : 'TANK';
  }
  searchDamage()
  {
    this.charactersRole = this.charactersRole == 'DAMAGE' ? 'ALL' : 'DAMAGE';
  }
  searchSupport()
  {
    this.charactersRole = this.charactersRole == 'SUPPORT' ? 'ALL' : 'SUPPORT';
  }

} // fin classe

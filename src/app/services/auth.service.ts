import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable()
export class AuthService 
{
    url: string = 'http://localhost:8080/api';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor(private http: HttpClient, private router: Router, private usersService: UsersService) { }

    createUser(userData: string, playerData)
    {
        this.http.post(this.url + '/users/signup', userData, this.httpOptions).subscribe(res => {
            console.log(res);
            this.usersService.userId = Number(res);

            playerData.id = res;
            console.log(JSON.stringify(playerData));
            
            this.createPlayer(playerData);
        },
        err => {
            console.log(err);
        })
    }

    createPlayer(playerData: string)
    {
        this.http.post(this.url + '/users/new_player', playerData, this.httpOptions).subscribe(res => {
            console.log(res);
            this.usersService.playerId = Number(res);
        },
        err => {
            console.log(err);
        })
    }

    logUser(userData:string)
    {
        this.http.post(this.url + '/users/login', userData).subscribe(res => {
            console.log(res);
            this.usersService.userId = Number(res);
        },
        err => {
            console.log(err);
        })
    }

}
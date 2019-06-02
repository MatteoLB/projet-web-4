import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loginOrSignin: number = 0;
  languages: string;
  userData: any;
  playerData: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  displayLogin()
  {
    this.loginOrSignin = 2;
  }
  displaySignin()
  {
    this.loginOrSignin = 1;
  }



  onSubmit(form: NgForm) 
  {
    console.log(form.value);

    if (form.value['logInMail'] != null && form.value['logInMail'] != '') 
    {
      this.userData = {
        mail: form.value['logInMail'],
        password: form.value['logInPassword']
      };

      this.authService.logUser(this.userData);
      this.router.navigate(['/search']);
    }
    else
    {
      if (form.value['signInPassword'] === form.value['signInConfirmPassword']) 
      {
        this.languages = '';
        
        if (form.value['frenchCheckbox']) {
          this.languages = 'fr - ';
        }

        if (form.value['englishCheckbox']) {
          this.languages += 'en - ';
        }

        this.userData = {
          mail: form.value['signInMail'],
          password: form.value['signInPassword'],
          avatar: 'abc',
          languages: this.languages
        };

        this.playerData = {
          game: form.value['selectGame'],
          username: form.value['username'],
          battletag: form.value['battletag'],
          platform: form.value['radioPlatformChoice'],
          role: form.value['radioRoleChoice']
        }
        console.log('json ' + JSON.stringify(this.userData));
        this.authService.createUser(this.userData, this.playerData);
        //this.router.navigate(['/search']);
      }

    } // end else for signin part
  } // end onSubmit
} // end class
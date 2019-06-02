import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { WhichGameComponent } from './search/which-game/which-game.component';
import { SearchOverwatchComponent } from './search/search-overwatch/search-overwatch.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/overwatch', component: SearchOverwatchComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MessagesComponent,
    SearchComponent,
    NavbarComponent,
    WhichGameComponent,
    SearchOverwatchComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

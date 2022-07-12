import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Route[] = [
  {path: '', component: HomeComponent },
  {path: 'followers/:username', component: ProfileComponent},
  {path: 'followers', component: FollowersComponent},
  {path: 'posts', component: PostComponent},
  {path: '**', component: PageNotFoundComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, PostComponent, PageNotFoundComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

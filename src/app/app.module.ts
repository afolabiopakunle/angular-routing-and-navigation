import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Route[] = [
  {path: '', component: HomeComponent }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

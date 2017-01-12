import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { AppRoutingModule }     from './app-routing.module';

import { HeroService } from './hero.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path:'heroes',
    //     component:HeroesComponent
    //   },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   },
    // ])
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
  ],
  providers:    [
    HeroService
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }

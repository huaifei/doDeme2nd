import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:` 
           <h1>{{title}}</h1>
           <!--<my-hero></my-hero>-->
<nav>
  <a routerLink="/dashboard">DashBoard</a>
  <a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
          `,
})

export class AppComponent{
  title:'aosdifj;wieofj;waifeo;aweifjowiefjowfj';


}

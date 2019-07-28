import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeroListComponent } from './herolist/herolist.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PeopleComponent } from './people/people.component';
import { HttpService } from './services/http.service';
import { PeopleService } from './services/people.service';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "herolist", component: HeroListComponent},
  {path: "heroDetails/:id", component: HeroDetailComponent},
  {path: "addHero", component: AddHeroComponent},
  {path: "people", component: PeopleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    AddHeroComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    HeroDetailComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    PeopleService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

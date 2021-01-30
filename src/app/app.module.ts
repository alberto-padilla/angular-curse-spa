import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';

import { HerosService} from './services/heros.service';

import { APP_ROUTING } from './app.routes';
import { HeroComponent } from './components/hero/hero.component';
import { HerosFilterComponent } from './components/heros-filter/heros-filter.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroComponent,
    HerosFilterComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

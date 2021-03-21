import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { MenuComponent } from './menu/menu.component';
import { HighlightedComponent } from './highlighted/highlighted.component';
import { CardsComponent } from './cards/cards.component';
import { LogoSlideComponent } from './logo-slide/logo-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { WeeksComponent } from './weeks/weeks.component';
import { BlogComponent } from './blog/blog.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MenuComponent,
    HighlightedComponent,
    CardsComponent,
    LogoSlideComponent,
    BadgesComponent,
    WeeksComponent,
    BlogComponent,
    SignUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

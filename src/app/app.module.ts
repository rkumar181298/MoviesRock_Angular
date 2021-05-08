import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, NgControl,ReactiveFormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CurrplayingComponent } from './currplaying/currplaying.component';
import { ContinueComponent } from './continue/continue.component';
import { TrendingmovieComponent } from './trendingmovie/trendingmovie.component';
import { TrendingtvComponent } from './trendingtv/trendingtv.component';
import { PopulartvComponent } from './populartv/populartv.component';
import { PopularmovieComponent } from './popularmovie/popularmovie.component';
import { TopratetvComponent } from './topratetv/topratetv.component';
import { TopratemovieComponent } from './topratemovie/topratemovie.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MovService } from './mov.service';
import { DetailComponent } from './detail/detail.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RecommendComponent } from './recommend/recommend.component';
import { SimilarComponent } from './similar/similar.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { VideoinfoComponent } from './videoinfo/videoinfo.component';
import { Videoinfo2Component } from './videoinfo2/videoinfo2.component';
import * as $ from 'jquery';
import { CastComponent } from './cast/cast.component';
import { ReviewComponent } from './review/review.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CurrplayingComponent,
    ContinueComponent,
    TrendingmovieComponent,
    TrendingtvComponent,
    PopulartvComponent,
    PopularmovieComponent,
    TopratetvComponent,
    TopratemovieComponent,
    WishlistComponent,
    DetailComponent,
    MainpageComponent,
    RecommendComponent,
    SimilarComponent,
    YoutubeComponent,
    VideoinfoComponent,
    Videoinfo2Component,
    CastComponent,
    ReviewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    CommonModule,
    YouTubePlayerModule,    
    BrowserModule,
    LayoutModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

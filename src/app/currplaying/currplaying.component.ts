import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MovService} from 'src/app/mov.service';
import { fileURLToPath } from 'url';
import {PlayingMV} from "../../playingmv"
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-currplaying',
  templateUrl: './currplaying.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./currplaying.component.css']
})
export class CurrplayingComponent implements OnInit {

  fivemvurl:string[]=[];
  data:any;
  res:any;
  playingmvs:any;
  images:any;
  constructor(private movService:MovService, private router:Router,public breakpointObserver: BreakpointObserver ) { }
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  ngOnInit() {
    this.data = this.movService.getPlayingMV().subscribe((data)=>{
      this.res =data;
      this.playingmvs=this.res.results.slice(0,5);

      // this.playingmvs.forEach(element => {
      //   this.fivemvurl.push(element.backdrop_path)
      // });
      // this.images = this.fivemvurl.map((n) => `https://image.tmdb.org/t/p/w780${n}`);
    });

    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      // console.log('Yes Small Screen');
      // $("#mainCaro .carousel-inner").css( {
      //   'width': '',
      //   'margin-left': ''
      // });
      // $("#mainCaro .carousel-indicators").css( {
      //   'display': 'none'
      // });

      // $("::ng-deep #mainCaro .carousel-control-next").css( {
      //   'right': '0 !important'
      // });
      // $("::ng-deep #mainCaro .carousel-control-prev").css( {
      //   'left': '0 !important'
      // });

      // $(".crop").css( {
      //   'width':'100%',
      //   'height':'',
      //   'overflow':'hidden'
      // });
      
      // $(".crop img").css( {
      //   'width': '100%'
      // });
      

      // $("#mainCaro .card-img-overlay").css({
      //   'visibility': 'visible',
      //   'background': 'rgba(0, 0, 0, 0) linear-gradient(to top, rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)) repeat scroll 0% 0%',
      //   'top': '124px',
      //   'position': 'absolute',
      //   'left': '14px',
      //   'width': '93%',
      //   'height': 'unset'
      // })
      // $("#mainCaro .card-text").css({
      //   'left': '7em',
      //   'bottom': '1em',
      //   'color': 'white',
      //   'font-size': '1em',
      //   'position': 'absolute'
      // })


    }else{
      // console.log('No Not a Small Screen');

    }

  }

  paused = false;
  unpauseOnArrow = false;
  // pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    // if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    //   this.togglePaused();
    // }
  }
}

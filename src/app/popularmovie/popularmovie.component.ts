import { Component, OnInit, Directive, HostListener, ElementRef, Input,ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {MovService} from 'src/app/mov.service';
import { setgroups } from 'process';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.component.html',
  styleUrls: ['./popularmovie.component.css']
})

export class PopularmovieComponent implements OnInit {

  data: any;
  allmvs:any;
  PREURL:string = "https://image.tmdb.org/t/p/w500";
  numofgroup:number;
  temp2=[];
  idx = -1;
  constructor(private movService:MovService, private router:Router,public breakpointObserver: BreakpointObserver) {
  }
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');


  // 1st Way
  // ngOnInit(){
  //   this.movService.getPopMV().subscribe(res=>{
  //     this.data =res;
  //     this.allmvs =this.data.results;
  //     this.numofgroup= Math.ceil(this.allmvs.length/6);
  //     var tempdx =-1;
  //     for(var i =0;i<this.allmvs.length;i++){
  //       if(i%6==0){
  //         tempdx++;
  //         this.temp2[tempdx]=[];
  //         this.temp2[tempdx].push(this.allmvs[i]);
  //       }else{
  //         this.temp2[tempdx].push(this.allmvs[i]);
  //       }
  //     }
  //   }); 
  // }

  // 2nd Way
  async ngOnInit(){
    this.data =await this.movService.getPopMV();
    this.allmvs = this.data.results;
    // this.numofgroup= Math.ceil(this.allmvs.length/6);

    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      // console.log('Yes Small Screen');
      // $("#popmv .carousel-inner").css( {
      //   'width': '15em',
      //   'margin-left': '3.5em'
      // });
      
      $("#popmv .carousel-control-next").css( {
        'right': '-2em'
      });
      $("#popmv .carousel-control-prev").css( {
        'left': '-2em'
      });

      // $("#popmv .card a div").css( {
      //   'visibility':"visible"
      // });

      // $("a div:card-img-overlay").css( {
      //   'visibility':"visible",
      //   'background': 'linear-gradient( to top, rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) )',
      //   'top': '10.125em',
      //   'position': 'absolute',
      //   'left': '0.875em',
      //   'width': '90%',
      //   'height':'unset'
      // });

    }else{
      try {
        this.numofgroup= Math.ceil(this.allmvs.length/6);
        var tempdx =-1;
        for(var i =0;i<this.allmvs.length;i++){
          if(i%6==0){
            tempdx++;
            this.temp2[tempdx]=[];
            this.temp2[tempdx].push(this.allmvs[i]);
          }else{
            this.temp2[tempdx].push(this.allmvs[i]);
          }
        }
      } catch (e) {
          console.log("that failed", e); 
      }
    }
 
  }
}

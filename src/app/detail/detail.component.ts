import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
 
  id: any;
  sub:any;
  // data_cast:any;
  // allresults_cast:any;
  //Need this one
  // all_cast:any;

  //Reviews
  // data_reviews:any;
  // allresults_reviews:any;
  // numofreviews:any;


  // detail_type: any;
  // detail_id:any;
  // detail_overview:any;
  // detail_reviews:any;
 
  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    $(window).on("load",function() {
      $("#success-alert").hide();
      $("#remove-alert").hide();
    });
  //   this.sub = this.route.params.subscribe(params => {
  //     this.id = params["id"]; // (+) converts string 'id' to a number
  //     this.detail_type = params["tp"];
  //     this.detail_id = +params["id"];
  //     console.log(this.id);
  //     console.log(this.detail_type);
  //  });


  //Casts
  // this.data_cast = this.movService.getFullCasts(this.detail_type,this.id).subscribe((data)=>{
  //   this.allresults_cast = data;
  //   this.all_cast = this.retrieveCastNotNull(this.allresults_cast.cast);

  // });

  // Reviews
  // this.data_reviews = this.movService.getReviews(this.detail_type,this.id).subscribe((data)=>{
  //   this.allresults_reviews = data;
  //   this.detail_reviews = this.allresults_reviews.results;
  //   this.numofreviews=this.detail_reviews.length;
  //   if(this.numofreviews<=10){
  //     this.detail_reviews.slice(0,10);
  //   }
  // });


  // end of init
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
    // this.data.unsubscribe();
    // this.youtube_data.unsubscribe();
    // this.data_cast.unsubscribe();
  }


  
  // retrieveCastNotNull(val:any){
  //   var i = [];
  //   val.forEach(element => {
  //     if(element.profile_path !=null){
  //       i.push(element);
  //     }
  //   });
  //   return i;
  // }

  // retrieveDate(val:any){
  //   var date = new Date(val);
  //   var options = {year: 'numeric', month: 'long', day: 'numeric',local:'long'};
  //   var cc= date.toLocaleDateString('en-US', options)
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var second =date.getSeconds();

  //   var ampm = hours >= 12 ? 'PM' : 'AM';
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   // minutes= minutes < 10 ? '0'+minutes: minutes;
  //   var strTime = minutes < 10 ? hours + ':' +'0'+ minutes : hours + ':' + minutes;
  //   strTime =second<10 ? strTime+':'+ '0'+second :strTime+':'+second
  //   var res = cc+ ', '+strTime +' ' + ampm ; 
  //   return res;
  // }


  // public reading: boolean;
  // public readMore(): void {
  //     this.reading = !this.reading;
  // }

}


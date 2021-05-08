import { Component, OnInit } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  id: any;
  sub:any;

  //Reviews
  data_reviews:any;
  allresults_reviews:any;
  numofreviews:any;


  detail_type: any;
  detail_id:any;
  detail_overview:any;
  detail_reviews:any;
 
  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.detail_type = params["tp"];
      this.detail_id = +params["id"];
      console.log(this.id);
      console.log(this.detail_type);
   });

   this.data_reviews = this.movService.getReviews(this.detail_type,this.id).subscribe((data)=>{
    this.allresults_reviews = data;
    this.detail_reviews = this.allresults_reviews.results;
    this.numofreviews=this.detail_reviews.length;
    if(this.numofreviews<=10){
      this.detail_reviews.slice(0,10);
    }
  });

  }

  retrieveDate(val:any){
    var date = new Date(val);
    var options = {year: 'numeric', month: 'long', day: 'numeric',local:'long'};
    var cc= date.toLocaleDateString('en-US', options)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second =date.getSeconds();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes= minutes < 10 ? '0'+minutes: minutes;
    var strTime = minutes < 10 ? hours + ':' +'0'+ minutes : hours + ':' + minutes;
    strTime =second<10 ? strTime+':'+ '0'+second :strTime+':'+second
    var res = cc+ ', '+strTime +' ' + ampm ; 
    return res;
  }


  public reading: boolean;
  public readMore(): void {
      this.reading = !this.reading;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.data_reviews.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-videoinfo2',
  templateUrl: './videoinfo2.component.html',
  styleUrls: ['./videoinfo2.component.css']
})
export class Videoinfo2Component implements OnInit {

  id: any;
  sub:any;
  detail_type: any;
  detail_id:any;
  detail_overview:any;
  
  // ytblink:any;
  data:any;
  allresults:any;

  youtube_data:any;
  youtuberesults:any;
  detail_youtube:any;

  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
   }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.detail_type = params["tp"];
      this.detail_id = +params["id"];
   });


  this.data = this.movService.getDeatil(this.detail_type,this.id).subscribe((data)=>{
    this.allresults =data;
    this.detail_overview =this.allresults.overview;
    });

  //Youtube
  this.youtube_data = this.movService.getYoutube(this.detail_type,this.id).subscribe((data) => {
    this.youtuberesults = data;
    if(this.youtuberesults.results.length==0){
      this.detail_youtube = "tzkWB85ULJY";
    }else{
      this.detail_youtube = this.youtuberesults.results[0].key;
    }
    });

  };

  
  ngOnDestroy() {
    this.sub.unsubscribe();
    // this.data.unsubscribe();
    // this.youtube_data.unsubscribe();
    this.data.unsubscribe();
  }

}

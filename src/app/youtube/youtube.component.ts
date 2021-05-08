import { Component, OnInit } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  id: any;
  sub:any;
  detail_type: any;
  detail_id:any;

  youtube_data:any;
  youtuberesults:any;
  detail_youtube:any;
  
  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(){

  this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.detail_type = params["tp"];
      this.detail_id = +params["id"];
   });

  //Youtube
   this.youtube_data = this.movService.getYoutube(this.detail_type,this.id).subscribe((data) => {
    this.youtuberesults = data;
    console.log(">>");
    
    console.log(data);
    
    if(this.youtuberesults.results.length==0){
      this.detail_youtube = "tzkWB85ULJY";
    }else{
      this.detail_youtube = this.youtuberesults.results[0].key;
    }
});;;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    // this.data.unsubscribe();
    // this.youtube_data.unsubscribe();
    this.youtube_data.unsubscribe();
  }

}

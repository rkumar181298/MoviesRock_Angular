import { Component, OnInit } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-videoinfo',
  templateUrl: './videoinfo.component.html',
  styleUrls: ['./videoinfo.component.css']
})
export class VideoinfoComponent implements OnInit {
  id: any;
  sub:any;
  detail_type: any;
  detail_id:any;

  data:any;
  allresults:any;

  detail_backdrop_path:any;
  detail_name:any;
  // detail_overview:any;
  detail_tagline:any;
  detail_languages:any;
  detail_runtime:any;
  detail_release:any;
  detail_vote_avg:any;
  detail_genres:any;
  detail_crews:any;
  detail_poster:any;

  existInList:any;

  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(){

    this.sub = this.route.params.subscribe(params => {
        this.id = params["id"]; // (+) converts string 'id' to a number
        this.detail_type = params["tp"];
        this.detail_id = +params["id"];
     });


        //Video Details
   this.data = this.movService.getDeatil(this.detail_type,this.id).subscribe((data)=>{
    this.allresults =data;
    if(this.detail_type=="movie"){
      this.detail_name = this.allresults.title;
    }else{
      this.detail_name = this.allresults.name;
    }
    // this.detail_overview =this.allresults.overview;
    this.detail_tagline = this.allresults.tagline;
    this.detail_runtime = this.minToHr(this.allresults.runtime);
    this.detail_languages =this.retrieveLanguages(this.allresults.spoken_languages);
    if(this.detail_type=="movie"){
      this.detail_release = this.allresults.release_date.slice(0,4);
    }else{
      this.detail_release = this.allresults.first_air_date.slice(0,4);
    }
    this.detail_vote_avg =this.allresults.vote_average;
    this.detail_genres = this.retrieveGenres(this.allresults.genres);
    this.detail_backdrop_path = this.allresults.backdrop_path;
    this.detail_poster = this.allresults.poster_path;
   });
   this.existInList = (localStorage.getItem(this.detail_id))?true:false;
  }

  minToHr(val:number){
    if(val ==null || val==undefined){
      return "N/A";
    }
    if(val<60){
      return val.toString;
    }else{
      var i = Math.floor(val/60);
      var rest = val-60*i;
      return i + 'hrs '+rest+'mins';
    }
  }

  retrieveGenres(val:any){
    if(val.length ==0 || val==undefined){
      return '';
    }else{
      var i= '';
      val.forEach(element => {
        i += element.name;
        i += ',';
      });
      i= i.slice(0,-1);
      return i;
    }
  }

  retrieveLanguages(val:any){
    if(val.length ==0 || val==undefined){
      return '';
    }else{
      var i= '';
      val.forEach(element => {
        i += element.english_name;
        i += ',';
      });
      i= i.slice(0,-1);
      return i;
    }
  }

  saveToMyList(){
    var idx= localStorage.length;
    if(idx>0){
       idx+=1;
    }
    var temp = ''+ idx;
    localStorage.setItem(this.detail_id,JSON.stringify({order:idx,name:this.detail_name,media_type:this.detail_type,id:this.id,url:this.detail_poster}))
    this.existInList= true;
    this.addd();
  //   $(document).ready(function() {
  //   $("#add").click(function showAlert() {
  //     $("#remove-alert").hide();
  //     $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
  //       $("#success-alert").slideUp(500);
  //     });
  //   });
  // });
    // console.log(localStorage.length);
    // console.log(localStorage.getItem(this.detail_id));
  }

  rmFromMyList(){
    localStorage.removeItem(this.detail_id);
    this.existInList= false;
    this.remmm();
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
    // this.data.unsubscribe();
    // this.youtube_data.unsubscribe();
    this.data.unsubscribe();
  }

  addd(){
    $("#remove-alert").hide();
    window.setTimeout(function() {
      $("#success-alert").fadeTo(500, 0).slideUp(500, function(){
          $(this).remove(); 
      });
  }, 5000);
  }

  remmm(){
    $("#success-alert").hide();
    window.setTimeout(function() {
      $("#remove-alert").fadeTo(500, 0).slideUp(500, function(){
          $(this).remove(); 
      });
  }, 5000);
  }


}

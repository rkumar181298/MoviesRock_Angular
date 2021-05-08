import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {


 //Similar
  data_similar:any;
  allresults_similar:any;
  numofgroup2:number;
  temp3=[]

  detail_similar:any;

  id: any;
  sub:any;
  detail_type: any;
  detail_id:any;

  isEmpty:boolean;
  
  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  ngOnInit(){

 this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.detail_type = params["tp"];
      this.detail_id = +params["id"];
   });

     // Similar
  this.data_similar = this.movService.getSimilar(this.detail_type,this.id).subscribe((data)=>{
    this.allresults_similar = data;
    this.detail_similar = this.allresults_similar.results;
    this.isEmpty = (this.detail_similar.length==0)?true:false;
    this.numofgroup2=Math.ceil(this.detail_similar.length/6);
    console.log(this.isEmpty);

    if (this.breakpointObserver.isMatched('(max-width: 599px)')){
      // $("#similar .carousel-indicators").css( {
      //   'display': 'none'
      // });
      // $("#similar .carousel-inner").css( {
      //   'width': '15em',
      //   'margin-left': '1.5em'
      // });
      $("#similar .carousel-control-next").css( {
        'right': '-2em'
      });
      $("#similar .carousel-control-prev").css( {
        'left': '-2em'
      });

      // $("#similar .card-img-overlay").css( {
      //   'visibility':"visible",
      //   'background': 'linear-gradient( to top, rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) )',
      //   'top': '170px',
      //   'position': 'absolute',
      //   'left': '7px',
      //   'width': '93%',
      //   'height':'unset'
      // });
      // $(".card-img-overlay").addClass(".addone");


    }else{
      var tempdx =-1;
      for(var i =0;i<this.detail_similar.length;i++){
        if(i%6==0){
          tempdx++;
          this.temp3[tempdx]=[];
          this.temp3[tempdx].push(this.detail_similar[i]);
        }else{
          this.temp3[tempdx].push(this.detail_similar[i]);
        }
      }
    }
  });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
    // this.data.unsubscribe();
    // this.youtube_data.unsubscribe();
    this.detail_similar.unsubscribe();
  }

}

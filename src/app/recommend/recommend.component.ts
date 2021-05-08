import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  id: any;
  sub:any;
  detail_type: any;
  detail_id:any;
  detail_recommend:any;

  //Recommend
  data_recommend:any;
  allresults_recommend:any;
  numofgroup:number;
  temp2=[];
  isEmpty:boolean;
  
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.detail_type = params["tp"];
      this.detail_id = +params["id"];
   });

   this.data_recommend = this.movService.getRecommend(this.detail_type,this.id).subscribe((data)=>{
    this.allresults_recommend = data;
    this.detail_recommend = this.allresults_recommend.results;
    this.isEmpty = (this.detail_recommend.length==0)?true:false;
    this.numofgroup=Math.ceil(this.detail_recommend.length/6);


    if (this.breakpointObserver.isMatched('(max-width: 599px)')){
      // $("#recommend .carousel-indicators").css( {
      //   'display': 'none'
      // });
      // $("#recommend .carousel-inner").css( {
      //   'width': '15em',
      //   'margin-left': '1.5em'
      // });
      $("#recommend .carousel-control-next").css( {
        'right': '-2em'
      });
      $("#recommend .carousel-control-prev").css( {
        'left': '-2em'
      });

      // $("#recommend .card-img-overlay").css( {
      //   'visibility':"visible",
      //   'background': 'linear-gradient( to top, rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) )',
      //   'top': '170px',
      //   'position': 'absolute',
      //   'left': '7px',
      //   'width': '93%',
      //   'height':'unset'
      // });
    }else{
      var tempdx =-1;
      for(var i =0;i<this.detail_recommend.length;i++){
        if(i%6==0){
          tempdx++;
          this.temp2[tempdx]=[];
          this.temp2[tempdx].push(this.detail_recommend[i]);
        }else{
          this.temp2[tempdx].push(this.detail_recommend[i]);
        }
      }
    }
  });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.detail_recommend.unsubscribe();
  }


}

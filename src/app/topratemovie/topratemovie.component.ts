import { AfterContentInit, Component, OnInit, ViewChild ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {MovService} from 'src/app/mov.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-topratemovie',
  templateUrl: './topratemovie.component.html',
  styleUrls: ['./topratemovie.component.css']
})
export class TopratemovieComponent implements OnInit {

  data:any;
  allmvs:any;
  numofgroup:number;
  temp2=[];
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  constructor(private movService:MovService, private router:Router,public breakpointObserver: BreakpointObserver) { }

  async ngOnInit() {
    this.data = await this.movService.getTopMV();
    this.allmvs = this.data.results;
    // this.numofgroup=Math.ceil(this.allmvs.length/6);

    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      // $("#topmv .carousel-inner").css( {
      //   'width': '15em',
      //   'margin-left': '3.5em'
      // });
      
      // $("#topmv .carousel-indicators").css( {
      //   'display': 'none'
      // });

      $("#topmv .carousel-control-next").css( {
        'right': '-2em'
      });
      $("#topmv .carousel-control-prev").css( {
        'left': '-2em'
      });
      // console.log('Yes Small Screen');
      // $(".card-img-overlay").css( {
      //   'visibility':"visible",
      //   'background': 'linear-gradient( to top, rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) )',
      //   'top': '170px',
      //   'position': 'absolute',
      //   'left': '7px',
      //   'width': '93%',
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
  //   try {
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
  // } catch (e) {
  //     console.log("that failed", e); 
  // }

  //   // console.log(this.temp2);
  // }

}


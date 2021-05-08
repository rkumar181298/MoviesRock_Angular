import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {MovService} from 'src/app/mov.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-topratetv',
  templateUrl: './topratetv.component.html',
  styleUrls: ['./topratetv.component.css']
})
export class TopratetvComponent implements OnInit {

  data:any;
  alltvs:any;
  numofgroup:number;
  temp2=[];
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  constructor(private movService:MovService, private router:Router,public breakpointObserver: BreakpointObserver) { }

  async ngOnInit(){
    this.data = await this.movService.getTopTV();
    this.alltvs = this.data.results;
     // this.numofgroup= Math.ceil(this.allmvs.length/6);

     if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      // $("#toptv .carousel-inner").css( {
      //   'width': '15em',
      //   'margin-left': '3.5em'
      // });
      
      // $("#toptv .carousel-indicators").css( {
      //   'display': 'none'
      // });

      $("#toptv .carousel-control-next").css( {
        'right': '-2em'
      });
      $("#toptv .carousel-control-prev").css( {
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
        this.numofgroup= Math.ceil(this.alltvs.length/6);
        var tempdx =-1;
        for(var i =0;i<this.alltvs.length;i++){
          if(i%6==0){
            tempdx++;
            this.temp2[tempdx]=[];
            this.temp2[tempdx].push(this.alltvs[i]);
          }else{
            this.temp2[tempdx].push(this.alltvs[i]);
          }
        }
      } catch (e) {
          console.log("that failed", e); 
      }
    }
  }
}

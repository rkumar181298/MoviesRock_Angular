import { Component, OnInit,ViewChild} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }

  isEmpty:boolean;
  savedVideo:any[]=[];
  temp2=[];

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  ngOnInit(){
    if(localStorage.length>0){
      this.isEmpty=false;
    }else{
      this.isEmpty=true;
    }
    if(!this.isEmpty){
    Object.keys(localStorage).forEach(data => 
      {
        let item = JSON.parse(localStorage.getItem(data));
        this.savedVideo.push(item);
      });
    console.log(this.savedVideo);

    if(this.isSmallScreen) {
      // console.log("TRIGGERED");
      // $("#ctn .carousel-inner").css( {
      //   'width': '15em',
      //   'margin-left': '3.5em'
      // });
      
      // $("#ctn .carousel-control-next").css( {
      //   'right': '-2em'
      // });
      // $("#ctn .carousel-control-prev").css( {
      //   'left': '-2em'
      // });

      // $("#ctn .card a div").css( {
      //   'visibility':"visible"
      // });

      // $("#ctn a>.card-img-overlay").css( {
      //   'visibility':"visible",
      //   'background': 'linear-gradient( to top, rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) )',
      //   'top': '170px',
      //   'position': 'absolute',
      //   'left': '7px',
      //   'width': '93%',
      //   'height':'unset'
      // });
    }else{
    //making groups
    var tempdx =-1;
      for(var i =0;i<this.savedVideo.length;i++){
        if(i%6==0){
          tempdx++;
          this.temp2[tempdx]=[];
          this.temp2[tempdx].push(this.savedVideo[i]);
        }else{
          this.temp2[tempdx].push(this.savedVideo[i]);
        }
  }
    }
    
}
}

}

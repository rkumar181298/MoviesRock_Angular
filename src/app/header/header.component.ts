import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import {Subject, merge,Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter,map,startWith, catchError,switchMap} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {MovService} from 'src/app/mov.service';
import {FormControl} from '@angular/forms';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  objectOptions:any;
  control = new FormControl();
  isLoaded:boolean;
  inputTxt:string='';
  public model: any;


  data:any;
  allstuff:any;
  numofgroup:number;
  temp2=[]

  tempsearch1:any;
  tempsearch2:any;

  formatter = (x: {name: string}) => x.name;
  constructor(private movService:MovService, private router:Router, private route:ActivatedRoute, private breakpointObserver: BreakpointObserver) {}

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

 
  ngOnInit() {
    if(this.breakpointObserver.isMatched('(max-width: 599px)')) {
      console.log("small");
    }
    else{
      console.log("not small");
    }
  }

search= (text$: Observable<string>) =>
    text$.pipe(
      // debounceTime(300),
      distinctUntilChanged(),
      // switchMap(term =>
      //   this.movService.getSearch(term).pipe()
      //   // this.takeSeven(this.movService.getSearch(term).pipe())
      // )
      switchMap(term => 
        (term.length >0 && term!=null && term!=undefined)?this.movService.getSearch(term).pipe(): []
      )
    )

  resultFormatBandListValue(value: any) {            
      return value.name;
    } 

  inputFormatBandListValue(value: any)   {
      if(value.name)
        return value.name
      return value;
    }   

  takeSeven(term:any){
    // var temp;
    // this.movService.getSearch(term).subscribe(res=>{
    //   temp =res;
    // });
    var temp =[];
    var idx =0;
    term.forEach(element => {
      if(element.backdrop_path!=null && idx<7){
        temp.push(element);
        idx++;
      }else if(idx >=7){
        return temp;
      }
    });
    return temp;
  }

  onSelect($event) {
    $event.preventDefault();
    this.model = null;
  };


}


$( "#coll" ).on( "click", function() {
  var value = $('#aria-expanded').val();
  if(value === "true")
 {
  $('#col').css({
    'border':'1px solid orange'
  });
 }else{
  $('#col').css({
    'border':''
  });
 }
});


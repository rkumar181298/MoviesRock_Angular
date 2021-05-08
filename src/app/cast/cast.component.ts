import { Component, OnInit } from '@angular/core';
import { MovService } from '../mov.service';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { NgbModal,NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
  providers: [NgbPopoverConfig]
})
export class CastComponent implements OnInit {

  id: any;
  sub:any;
  data_cast:any;
  allresults_cast:any;
  //Need this one
  all_cast:any;
  detail_type: any;
  detail_id:any;
  closeResult: string;

  data_person:any;
  data_external:any;
  allresults_person:any;
  allresults_link:any;

  constructor(private movService:MovService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver,private modalService: NgbModal, config: NgbPopoverConfig) {
    config.placement = 'top';
    config.triggers = 'hover';
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.detail_type = params["tp"];
      this.detail_id = +params["id"];
      console.log(this.id);
      console.log(this.detail_type);
   });


  //Casts
  this.data_cast = this.movService.getFullCasts(this.detail_type,this.id).subscribe((data)=>{
    this.allresults_cast = data;
    this.all_cast = this.retrieveCastNotNull(this.allresults_cast.cast);

  });
  }

  retrieveCastNotNull(val:any){
    var i = [];
    val.forEach(element => {
      if(element.profile_path !=null){
        i.push(element);
      }
    });
    return i;
  }

  openLg(content,person_id) {
    this.modalService.open(content, { size: 'lg', scrollable: true });
    this.data_person = this.movService.getPerson(person_id).subscribe((data)=>{
      this.allresults_person =data;
    });
    this.data_external = this.movService.getExternal(person_id).subscribe((data)=>{
      this.allresults_link =data;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.data_cast.unsubscribe();
  }

  getGender(val:any){
    return (val==2)?'Male':'Female';
  }

  getOtherNames(val:any){
    var temp='';
    val.forEach(element => {
      temp+=element+',';
    });
    return temp.slice(0,-1);
  }


}

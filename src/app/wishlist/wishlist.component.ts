import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  isEmpty:boolean;
  savedVideo:any[]=[];

  ngOnInit(): void {
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
    // console.log(this.savedVideo);
    
}
}
}

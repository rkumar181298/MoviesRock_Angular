import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule} from '@angular/router';
import {AppComponent} from 'src/app/app.component';
import {WishlistComponent} from 'src/app/wishlist/wishlist.component';
import { DetailComponent } from './detail/detail.component';
import { MainpageComponent } from './mainpage/mainpage.component';



const appRoutes: Routes = [
  {path:'', component: MainpageComponent},
  {path:'mylist', component: WishlistComponent,},
  {path:'watch/:tp/:id',component:DetailComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

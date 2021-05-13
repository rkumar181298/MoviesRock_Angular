import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of, from}from 'rxjs';
import { PlayingMV } from '../playingmv';
import { CurrplayingComponent } from './currplaying/currplaying.component';
import { delay, map, toArray } from 'rxjs/operators';
import { Key } from 'protractor';

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable({
  providedIn: 'root'
})
export class MovService {

  tempsearch:any;

  constructor(private http: HttpClient) { }

  
  // MOVIES
  getPlayingMV(){
    // return this.http.get('http://localhost:9000/playingmv');
    // https://movie-web-571.wn.r.appspot.com/
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=<your api key>&language=en-US&page=1');
  }
  getPopMV():Promise<any>{
    // return this.http.get('http://localhost:9000/popularmv').toPromise();
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=<your api key>&language=en-US&page=1').toPromise();
  }
  getTopMV():Promise<any>{
    // return this.http.get('http://localhost:9000/topratemv').toPromise();
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=<your api key>&language=en-US&page=1').toPromise();
  }
  getTendingMV():Promise<any>{
    // return this.http.get('http://localhost:9000/trendingmv').toPromise();
    return this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=<your api key>').toPromise();
  }

  // TVS
  getPopTV():Promise<any>{
    // return this.http.get('http://localhost:9000/populartv').toPromise();
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=<your api key>&language=en-US&page=1').toPromise();
  }
  getTopTV():Promise<any>{
    // return this.http.get('http://localhost:9000/topratetv').toPromise();
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=<your api key>&language=en-US&page=1').toPromise();
  }
  getTendingTV():Promise<any>{
    // return this.http.get('http://localhost:9000/trendingtv').toPromise();
    return this.http.get('https://api.themoviedb.org/3/trending/tv/day?api_key=<your api key>').toPromise();
  }

  //Search Bar
  getSearch(keyword:string){
    // if(keyword!=null && keyword!=undefined && keyword!=""){
    //   return this.http.get<[any, string[]]>('http://localhost:9000/search/'+keyword).pipe(
    //     map(response => response["results"].filter(data => data.backdrop_path!=null).slice(0,7))
    //   );
    // }
    if(keyword!=null && keyword!=undefined && keyword!=""){
      return this.http.get<[any, string[]]>('https://movie-web-571.wn.r.appspot.com/search/'+keyword).pipe(
        map(response => response["results"].filter(data => data.backdrop_path!=null).slice(0,7))
      );
    }
  }



  getDeatil(tp:string,id:string){
    // return this.http.get('http://localhost:9000/watch/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/watch/'+tp+'/'+id);
  }

  getReviews(tp:string,id:string){
    // return this.http.get('http://localhost:9000/reviews/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/reviews/'+tp+'/'+id);

  }

  getYoutube(tp:string,id:string){
    // return this.http.get('http://localhost:9000/youtube/'+tp+'/'+id);
    return this.http.get(`https://api.themoviedb.org/3/${tp}/${id}/videos?api_key=<your api key>&language=en-US`);
  }

  // getYoutube(tp:string,id:string): Observable<any> {
  //   return from(
  //     fetch(
  //       `https://movie-web-571.wn.r.appspot.com/youtube/${tp}/${id}`, // the url you are trying to access
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         method: 'GET', // GET, POST, PUT, DELETE
  //         mode: 'no-cors' // the most important option
  //       }
  //     ));
  // }

  //Casts
  getFullCasts(tp:string,id:string){
    // return this.http.get('http://localhost:9000/cast/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/cast/'+tp+'/'+id);
  }

  getPerson(id:string){
    // return this.http.get('http://localhost:9000/findperson/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/findperson/'+id);
  }

  getExternal(id:string){
    // return this.http.get('http://localhost:9000/external/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/external/'+id);
  }
  
  getRecommend(tp:string,id:string){
    // return this.http.get('http://localhost:9000/recommend/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/recommend/'+tp+'/'+id);
  }
  
  getSimilar(tp:string,id:string){
    // return this.http.get('http://localhost:9000/similar/'+tp+'/'+id);
    return this.http.get('https://movie-web-571.wn.r.appspot.com/similar/'+tp+'/'+id);
  }



}

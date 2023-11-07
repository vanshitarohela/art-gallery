import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, Config, Info, Pagination, Welcome } from '../Interfaces/art';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtGalleryService {
  public artFabs:string[]=[];
  constructor(private http: HttpClient) {
    // let userval = localStorage.getItem('userFabs');
    // if (userval != null) {
    //   this.artFabs= JSON.parse(userval);
    // } else {
    //   localStorage.setItem('userFabs', JSON.stringify([]));
    // }
  }
  getArtDetails(_page:number,_limit:number):any {
    return this.http.get<Welcome>("https://api.artic.edu/api/v1/artworks?page=" + _page + '&limit=' + _limit);
  }
  public getArtworksId(id: string): any {
    return this.http.get <Welcome>('https://api.artic.edu/api/v1/artworks/' + id);
  }
  public getArtworksIds(id: string): any {
    return this.http.get <Welcome>('https://api.artic.edu/api/v1/artworks/?ids=' + id);
  }
  public getArtworksBySearch(str:string){
    return this.http.get <Welcome>('https://api.artic.edu/api/v1/artworks/search?q='+ str + "&fields=id,image_id,title,artist_display,date_display,main_reference_number");

  }
  public storeFav(id:string){
      if(localStorage.getItem('fabs')===undefined){
        this.artFabs.push(id);
        localStorage.setItem('fabs',JSON.stringify(this.artFabs));
      }else{
        this.artFabs.push(id);
        localStorage.setItem('fabs',JSON.stringify(this.artFabs));
      }
    
  }
}

// interface artDTO {
//   config: Config,
//   data: Datum[], 
//   pagination: Pagination, 
//   info: Info
// }

import { Component, OnInit } from '@angular/core';
import { ArtGalleryService } from '../services/art-gallery.service';
import { Observable } from 'rxjs';
import { Datum, Welcome } from '../Interfaces/art';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css'],
  
})
export class HomeCompComponent implements OnInit {
  public artData:any;
  constructor(private artService: ArtGalleryService,public router:Router) {
    console.log(this.artData);

  }
  pageTotal = 0;
  pageIndex = 0; 
  public fav:any;
  ngOnInit() {
    
    this.getArtworks(this.pageIndex,20);
  }
  getArtworks(index:number,size:number){
    this.artService.getArtDetails(index+1,size)
      .subscribe((data: Welcome) => {
        console.log(data)
        this.artData=data.data
        this.pageTotal=data.pagination.total;
        this.pageIndex=data.pagination.current_page;
        console.log(this.pageIndex);
      });
  }
  PageAmount(size :PageEvent)
  {
    console.log(size);
    this.getArtworks(size.pageIndex,size.pageSize);
  }
  toDetails (id: string)
  {
    console.log(id);
    this.router.navigate(['/detailView', id]);
    

  }
  toFav(id:string){
      this.artService.storeFav(id);
  }
}
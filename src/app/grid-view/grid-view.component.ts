import { Component } from '@angular/core';
import { ArtGalleryService } from '../services/art-gallery.service';
import { Welcome } from '../Interfaces/art';
import { Router } from '@angular/router';
import { FormControl, FormGroup ,} from '@angular/forms';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent {
  showResults=new FormGroup({
    search:new FormControl('')
  })
  public artData:any;
  constructor(public artService:ArtGalleryService,public router:Router){
   
  }
  searchArt(){
    this.str=this.showResults.getRawValue().search;
    this.getArtworks(this.str);
    console.log(this.str);
    let p=document.createElement('h2');
    p.innerHTML="Top 10 results:-"
    let main=document.getElementById('min');
    main?.appendChild(p);
  }
  str:any;
  ngOnInit() {
    
  
  }
  getArtworks(str:string){
    this.artService.getArtworksBySearch(str)
      .subscribe((data: Welcome) => {
        // console.log(data)
        this.artData=data.data 
        console.log(this.artData);
        
      });
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

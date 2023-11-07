import { Component } from '@angular/core';
import { ArtGalleryService } from '../services/art-gallery.service';
import { Welcome } from '../Interfaces/art';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent {
  public artData: any;
  constructor(public artService: ArtGalleryService) {
    console.log(localStorage.getItem('fabs'));
    
  }
  

  str: string = "";
  ngOnInit() {


    const store = JSON.parse(localStorage.getItem('fabs')!);
    store.forEach((ele: string) => {
      this.str = this.str + ele+ ",";
    });
    this.str=this.str.slice(0,this.str.length-1)
    this.getArtworks(this.str)
  }
  getArtworks(index: string) {
    this.artService.getArtworksIds(index)
      .subscribe((data: Welcome) => {
        console.log(data.data)
        console.log(this.str);
        this.artData = data.data


      });
  }

}

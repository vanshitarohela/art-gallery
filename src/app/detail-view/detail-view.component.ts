import { Component, Input } from '@angular/core';
import { ArtGalleryService } from '../services/art-gallery.service';
import { ActivatedRoute } from '@angular/router';
import { Welcome } from '../Interfaces/art';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  @Input() private id:string="";
  public artDetail:any;
  constructor(private artDetails:ArtGalleryService,private route:ActivatedRoute){}
  ngOnInit():void{
    const id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.id=id;
    }else{
      return;
    }
    this.artDetails.getArtworksId(id).subscribe((data: Welcome) => {
      console.log(data)
      this.artDetail=data.data;
    });

    
  }
}

import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;

  constructor(private faceSnapsService:FaceSnapsService, private route : ActivatedRoute){}
  
  ngOnInit() {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onClicSnap() {
    if (this.faceSnap.snapFlag) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,this.faceSnap.snapFlag);
      this.faceSnap.snapFlag=false;
      this.faceSnap.snapButton="Oh snap !";
      
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,this.faceSnap.snapFlag);
      this.faceSnap.snapFlag=true;
      this.faceSnap.snapButton="Oops, un Snap!"; 
    }
    
    
  }


}

import { Component,OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;  
  
  constructor(private faceSnapsService:FaceSnapsService){}
  
  ngOnInit() {
      
  }

  onClicSnap() {
    if (this.faceSnap.snapFlag) {
      this.faceSnap.snaps--;
      this.faceSnap.snapFlag=false;
      this.faceSnap.snapButton="Oh snap !";
      
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnap.snapFlag=true;
      this.faceSnap.snapButton="Oops, un Snap!"; 
    }
    
    
  }


}

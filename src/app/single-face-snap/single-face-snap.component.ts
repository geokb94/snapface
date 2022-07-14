import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;  
  
  constructor(private faceSnapsService:FaceSnapsService, private router : Router){}
  
  ngOnInit() {
      
  }
onClicImage() {
  
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);

};

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

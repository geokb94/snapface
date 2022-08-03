import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;
  faceSnap$! : Observable<FaceSnap>;

  constructor(private faceSnapsService:FaceSnapsService, private route : ActivatedRoute){}
  
  ngOnInit() {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$=this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onClicSnap(faceSnapId:number, faceSnapFlag:boolean) {
    if (faceSnapFlag) {
      this.faceSnap$=this.faceSnapsService.snapFaceSnapById(faceSnapId,faceSnapFlag);
      
      
    } else {
      this.faceSnap$=this.faceSnapsService.snapFaceSnapById(faceSnapId,faceSnapFlag);
      
    }
    
    
  }


}

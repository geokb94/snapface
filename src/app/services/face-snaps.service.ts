import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor() { }
  faceSnaps:FaceSnap[]=[

    {
      id:1,
      title:"geo",
      description:"Photo de GEO",
      createdDate:new Date(),
      snaps:10,
      snapFlag:false,
      imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      snapButton:"Oh snap !",
      location:"Paris"
    },
    {
      id:2,
      title:"geo2",
      description:"Photo de GEO2",
      createdDate:new Date(),
      snaps:20,
      snapFlag:false,
      imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      snapButton:"Oh snap2 !",
      location:"Lisbonne"
    },
    {
      id:3,
      title:"geo3",
      description:"Photo de GEO3",
      createdDate:new Date(),
      snaps:30,
      snapFlag:false,
      imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      snapButton:"Oh snap3 !"

    }

  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  };

  getFaceSnapById(faceSnapId:number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      return faceSnap;
  } else {
      throw new Error('FaceSnap not found!');
  }
    
  };

  snapFaceSnapById(faceSnapId:number, typeSnap:boolean):void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    if (typeSnap) {
        faceSnap.snaps--;
    } else {
      faceSnap.snaps++;
    }
  }


}

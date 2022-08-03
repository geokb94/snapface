import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http : HttpClient) { }
  faceSnaps:FaceSnap[]=[

    {
      id:1,
      title:"geo",
      description:"Photo de GEO",
      createdDate:new Date(),
      snaps:10,
      snapFlag:false,
      imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      snapButton:"Oh snap!",
      location:"World"
    },
    {
      id:2,
      title:"geo2",
      description:"Photo de GEO2",
      createdDate:new Date(),
      snaps:20,
      snapFlag:false,
      imageUrl:"https://cfcaracas.org/wp-content/uploads/france.jpg",
      snapButton:"Oh snap2 !",
      location:"Paris"
    },
    {
      id:3,
      title:"geo3",
      description:"Photo de GEO3",
      createdDate:new Date(),
      snaps:0,
      snapFlag:false,
      imageUrl:"https://www.javea.com/wp-content/uploads/2015/07/Pelota-de-voley-playa-766x378.jpg",
      snapButton:"Oh snap3 !",
      location:"Corse"

    }

  ];

  /*
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  };
*/

getAllFaceSnaps(): Observable<FaceSnap[]> {
  return this.http.get<FaceSnap[]>('http://localhost:8080/api/facesnaps');
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
  };

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
        snapButton:"oh snap!!",
        snapFlag:false
    };
    this.faceSnaps.push(faceSnap);
}


}

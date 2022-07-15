import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, filter, interval, map, Observable, of, tap, mergeMap, take } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  

  interval$! : Observable<{ color: "rouge" | "jaune"; trainIndex: number; }>;
  exemple : number = 5;
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
  

  ngOnInit() {

    this.interval$ = interval(3000).pipe(
      // filter(value =>value % 2 === 0),
      map(value => value % 2 === 0 ? 
        `rouge`: 
        `jaune`),
        take(5),
        tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
        tap(text=>this.logger(text)),
        mergeMap(color => this.getTrainObservable$(color)),
        tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
      );

     
    // interval$.subscribe(value => console.log(value));

    
    
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
}
  
 }

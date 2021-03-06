import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders'
import { of, Observable } from 'rxjs';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  // getLeaders(): Promise<Leader[]> {
  //   //return Promise.resolve(LEADERS);

  //   // return new Promise(resolve=>{
  //   //   setTimeout(()=> resolve(LEADERS), 2000)
  //   // })
  // }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  // getLeader(id: string): Promise<Leader> {
  //   //return Promise.resolve(LEADERS.filter((leader)=>(leader.id === id))[0]);

  //   // return new Promise( resolve=> {
  //   //   setTimeout(()=> resolve(LEADERS.filter((leader)=>(leader.id === id))[0]),2000)
  //   // });
  // }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((leader)=>(leader.id === id))[0]).pipe(delay(2000));
  }

  // getFeaturedLeader(): Promise<Leader> {
  //   // return new Promise( resolve=> {
  //   //   setTimeout(()=> resolve (LEADERS.filter((leader)=>leader.featured)[0]), 2000);
  //   // });
  // }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((leader)=>leader.featured)[0]).pipe(delay(2000));
  }
  

}

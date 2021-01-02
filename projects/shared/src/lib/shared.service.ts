import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private appName$ = new BehaviorSubject<string>('');
  public onAppNameChange:  Observable<string>;
  
  constructor() {
    console.log('new platform');
    this.onAppNameChange = this.appName$.asObservable();
  }

  public setAppName(val: string) {
    this.appName$.next(val);
  }
}

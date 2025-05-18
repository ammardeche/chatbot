import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LevelServiceService {
  private getLevelsSubject = new BehaviorSubject<string>('');
  getLevels$ = this.getLevelsSubject.asObservable();
  setLevel(level: string) {
    this.getLevelsSubject.next(level);
  }
  constructor() {}
}

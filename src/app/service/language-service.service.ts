import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageServiceService {
  constructor() {}

  private getLanguagesSubject = new BehaviorSubject<string>('');

  getLanguages$ = this.getLanguagesSubject.asObservable();

  setLanguage(language: string) {
    this.getLanguagesSubject.next(language);
  }
}

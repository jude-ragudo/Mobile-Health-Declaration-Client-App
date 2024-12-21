// home-page-authorization-link.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageAuthorizationLinkService {
  private enableButtonSubject = new BehaviorSubject<boolean>(false);
  enableButton$ = this.enableButtonSubject.asObservable();

  setButtonState(enable: boolean) {
    this.enableButtonSubject.next(enable);
  }
}

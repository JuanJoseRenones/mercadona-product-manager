import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username: string = '';

  public constructor(
    private readonly router: Router,
  ) { }

  /** Logs the user into the application */
  public login(username: string, password: string): Observable<any> {
    // TODO: Call back end login endpoint when it is available
    return new Observable<any>(
      (observer: Subscriber<any>) => {
        const mockDelayMillisecons: number = 1000;
        setTimeout(
          (): void => {
            this.username = username;
            observer.next(null);
            observer.complete();
          },
          mockDelayMillisecons,
        )
      }
    );
  }

  /** Logs the user out of the application */
  public logout(): void {
    this.username = '';
    this.router.navigate(['']);
  }

}

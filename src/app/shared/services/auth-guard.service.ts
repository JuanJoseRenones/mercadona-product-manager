import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  public constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  /** Checks whether the user can activate the requested route
   * @returns Flag indicator
   */
  public canActivate(): boolean {
    if (this.authService.username) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}

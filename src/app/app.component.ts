import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(
    public readonly authService: AuthService,
    public readonly dialog: MatDialog,
  ) { }

  /** Opens the login dialog */
  public openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }

  /** Logs the user out of the application */
  public logout(): void {
    this.authService.logout();
  }

}

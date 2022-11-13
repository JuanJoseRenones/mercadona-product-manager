import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  /** User application username */
  public username: string = '';
  /** User application password */
  public password: string = '';
  /** Flag that indicates whether the password should be hidden */
  public shouldHidePassword: boolean = true;
  /** Flag that indicates whether the progress spinner should be visible */
  public shouldProgressSpinnerBeVisible: boolean = false;

  public constructor(
    public readonly authService: AuthService,
    public readonly dialogRef: MatDialogRef<LoginDialogComponent>
  ) { }

  /** Closes the dialog */
  public close(): void {
    this.dialogRef.close();
  }

  /** Logs the user into the application and closes the dialog */
  public login(): void {
    this.shouldProgressSpinnerBeVisible = true;
    this.authService.login(this.username, this.password)
    .subscribe({
      next: (): void => {
        this.close();
      },
    })
    .add((): void => { // Executes always (next/error)
      this.shouldProgressSpinnerBeVisible = false;
    });
  }

}

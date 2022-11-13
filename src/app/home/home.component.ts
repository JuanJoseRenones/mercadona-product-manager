import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public constructor(
    public readonly authService: AuthService,
  ) { }

  /** Number of products pending to check */
  public productsToCheckNumber: number = 100; // TODO: Get from back end when endpoint is available

 }

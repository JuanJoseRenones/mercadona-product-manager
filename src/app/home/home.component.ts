import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /** Number of products pending to check */
  public productsToCheckNumber: number = 100; // TODO: Get from back end when endpoint is available

 }

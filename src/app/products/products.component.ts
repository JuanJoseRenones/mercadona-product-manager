import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  /** Table column identifiers */
  public readonly tableColumnIds: string[] = ['name', 'price', 'format', 'brand'];
  /** Table data */
  public readonly tableData: Product[] = [];
  /** Table datasource */
  public tableDataSource = new MatTableDataSource<Product>(this.tableData);
  /** Flag that indicates whether the progress spinner should be visible */
  public shouldProgressSpinnerBeVisible: boolean = false;


  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  constructor() { }

  /** Component initialization */
  public ngOnInit(): void {
    this.getProducts();
  }

  /** After component view initialization */
  public ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.paginator;
  }

  /** Drop event handler */
  public handleDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tableColumnIds, event.previousIndex, event.currentIndex);
  }

  /** Drop event handler */
  private getProducts(): void {
    this.shouldProgressSpinnerBeVisible = true;
    // TODO: Get from back end when endpoint is available
    const products: Product[] = [];
    for (let i: number = 1; i < 50; i++) {
      products.push({
        name: `Producto ${i}`,
        price: parseFloat(`${i}.${i}${i}`),
        format: `Formato ${i}`,
        brand: `Marca ${i}`
      });
    }
    const mockDelayMillisecons: number = 1000;
    setTimeout(
      (): void => {
        this.tableData.length = 0
        this.tableData.push(...products);
        this.shouldProgressSpinnerBeVisible = false;
      },
      mockDelayMillisecons,
    );
  }

}

export interface Product {
  name: string;
  price: number;
  format: string;
  brand: string;
}

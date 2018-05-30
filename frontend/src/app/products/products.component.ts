import {Component, OnInit} from '@angular/core';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';
import {Product} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor() {
  }

  ngOnInit() {
    ajaxGetJSON('/api/v1/products').subscribe(
      (data: Array<Product>) => this.products = data,
      error => console.log(error.toString()));
  }

}

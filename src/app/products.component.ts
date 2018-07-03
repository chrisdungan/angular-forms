import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productName: string;
  isDisabled: boolean;
  products: string[];

  constructor() {
    this.productName = 'A Book';
    this.isDisabled = false;
    this.products = ['A Book', 'A Tree'];
   }

  ngOnInit() {
    setTimeout(() => {
      this.productName = 'A Tree';
    }, 3000);
  }

  onHandleChange(value: string) {
    this.productName = value;
    console.log('ngModel handle change event');
  }

  onAddProduct(form) {
    if (form.valid) {
      this.products.push(form.value.productName);
      console.log(form);
    }
  }

  onRemoveProduct(productName) {
    this.products = this.products.filter(p => p !== productName);
  }
}

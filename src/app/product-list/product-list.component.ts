import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


import { Product } from './../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList:Product;
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct:Product;

  constructor() {
    this.onProductSelected= new EventEmitter();
   }

   clicked(product:Product):void{
     this.currentProduct = product;
     this.onProductSelected.emit(product);
   }

   isSelected(product:Product)
   {
      if(!product || !this.currentProduct)
      {
        return false;
      }
      return product.sku === this.currentProduct.sku;
   }
   
  ngOnInit() {
  }

}

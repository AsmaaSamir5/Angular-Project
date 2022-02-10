import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_servic/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products?: any[];
  favoriteProducts: any[] =[];
  ngOnInit(): void {
    this.products = this.productService.getAllProduct();
  }
  print(product:any){
    this.favoriteProducts.push(product);
  }

}

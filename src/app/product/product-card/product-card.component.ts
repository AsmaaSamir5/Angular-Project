import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  @Output() getFavProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

   addToFav(product:any){
     this.getFavProduct.emit(product);
   }
}




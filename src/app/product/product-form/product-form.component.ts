import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_model/iuser';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  user: IUser = { username: '', password: '' }


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.user)
  }

}

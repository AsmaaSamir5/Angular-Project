import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:string[]=[];
  usr2:string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.usr2 = this.users;
  }
  adduser(username:string){
    this.users.push(username);
    console.log(this.users);
  }

remov(index:any){
  this.users.splice(index,1);
} 

search(index:string){
  this.usr2 = this.users.filter(i => (i.includes(index)));
  console.log(this.usr2);
}
}

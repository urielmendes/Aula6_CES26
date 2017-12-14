import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Compras';
  items = [];
  item = "";
  newList = false;
  add(){
  	this.items.push(this.item);
  	this.newList = true;

  }
  empty(){
  	this.items = [];
  	this.newList = false;
  }
}

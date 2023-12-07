import { Component } from '@angular/core';
import { ServicesService } from '../Services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
product={
id:"",
name :'' ,
prix: ' ' ,
descripcion:"",
url: '' 
}
products: any[]=[];
constructor(private service:ServicesService){}

addProduct(){
  this.service.add();
  
}  
}

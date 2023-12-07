import { Component } from '@angular/core';
import { ServicesService } from '../Services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product={
    name :'' ,
    prix: ' ' ,
    url: '' 
    }
    products: any[]=[];
    constructor(private service:ServicesService){}
    
    addProduct(){
      this.service.add();
      
    }  
    }


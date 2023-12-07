import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  product={
    name :'' ,
    prix: ' ' ,
    url: '' 
    }
    products: any[]=[];

  // constructor( ) { }
  add(){
    this.products.push(this.product);

  }

  affiche(){
    
  }

  delete(){


  }

  update(){

  }
}

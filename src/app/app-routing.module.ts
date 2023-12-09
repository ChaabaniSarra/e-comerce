import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
{
  path :'',
  redirectTo:'/home',
  pathMatch:'full'
},

{
 path: 'home',
 component: AccueilComponent,
},


{
  path: 'contact',
  component: ContactComponent,
 },

 {
  path: 'product',
  component: ProductListComponent,
 },

 {
  path: 'about',
  component: AboutComponent,
 },

 {
  path: 'addproduct',
  component: AddProductComponent,
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

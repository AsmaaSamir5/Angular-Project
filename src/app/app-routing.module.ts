import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  // {
  //   path: "product", component: ProductListComponent, children: [
  //     {

  //      // path: "productdtl/:id", component: ProductDtlComponent
  //     }]
  // },
  { path: "productform", component: ProductFormComponent },
  { path: '', redirectTo: "productform", pathMatch: "full" },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

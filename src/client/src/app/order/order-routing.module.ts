import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";


const routes: Routes = [
  {path: '', component: OrderListComponent},
  {path: ':id', component: OrderDetailsComponent, data: {breadcrumb: {alias: 'orderDetails'}}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

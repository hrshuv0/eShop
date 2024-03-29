import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TestErrorComponent } from "./core/test-error/test-error.component";
import { ServerErrorComponent } from "./core/server-error/server-error.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import {skip} from "rxjs";
import {AuthGuard} from "./core/_guards/auth.guard";

const routes: Routes = [
  { path: '',             component: HomeComponent,        data: {breadcrumb: 'Home'} },
  { path: 'test-error',   component: TestErrorComponent,   data: {breadcrumb: 'Test Errors'}},
  { path: 'server-error', component: ServerErrorComponent, data: {breadcrumb: 'Server Errors'} },
  { path: 'not-found',    component: NotFoundComponent,    data: {breadcrumb: 'Not Found'}},
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
    data: {breadcrumb: 'Shop'} },
  { path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    data: {breadcrumb: 'Basket'} },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule), canActivate:[AuthGuard],
    data: {breadcrumb: 'Checkout'} },
  { path: 'orders', loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule), canActivate:[AuthGuard],
    data: {breadcrumb: 'Orders'} },
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
    data: {breadcrumb: {skip: true}} },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

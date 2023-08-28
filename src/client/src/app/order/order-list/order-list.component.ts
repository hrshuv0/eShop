import { Component, OnInit } from '@angular/core';
import { IOrder } from "../../_models/order";
import { OrderService } from "../order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit
{
  orders: IOrder[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void
  {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrdersForUser().subscribe((orders: IOrder[]) => {
      this.orders = orders;
    }, error => {
      console.log(error);
    });
  }



}

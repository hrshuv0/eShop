import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IBasketTotals} from "../../../_models/basket";
import {BasketService} from "../../../basket/basket.service";

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit{
  basketTotal$ : Observable<IBasketTotals>;

  constructor(private basketService: BasketService){
    this.basketTotal$ = this.basketService.basketTotal$;
  }

  ngOnInit(): void {
  }

}

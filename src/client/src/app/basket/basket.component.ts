import {Component, OnInit} from '@angular/core';
import {BasketService} from "./basket.service";
import {IBasketItem, IBasketTotals} from "../_models/basket";
import {Observable} from "rxjs";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  basket$ = this.basketService.basket$;
  basketTotals$ : Observable<IBasketTotals>;

  constructor(private basketService: BasketService){

  }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotal$;
  }

  incrementItemQuantity(item: IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }

  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }










}

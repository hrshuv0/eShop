import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketService} from "../../../basket/basket.service";
import {Observable} from "rxjs";
import {IBasket, IBasketItem} from "../../../_models/basket";
import {IOrderItem} from "../../../_models/order";

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  // basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket : boolean = true;
  @Input() items: IBasketItem[] | IOrderItem[] = [];
  @Input() isOrder: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }

}

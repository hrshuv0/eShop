import {Component, OnInit} from '@angular/core';
import {BasketService} from "./basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  basket$ = this.basketService.basket$;
  constructor(private basketService: BasketService){

  }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

}

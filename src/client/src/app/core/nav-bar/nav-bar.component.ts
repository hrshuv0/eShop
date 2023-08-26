import { Component, OnInit } from '@angular/core';
import { BasketService } from "../../basket/basket.service";
import { Observable } from "rxjs";
import { IUser } from "../../_models/user";
import { AccountService } from "../../account/account.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  basket$ = this.basketService.basket$;
  currentUser$ : Observable<IUser>;

  constructor(private basketService: BasketService,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    this.accountService.logout();
  }


}

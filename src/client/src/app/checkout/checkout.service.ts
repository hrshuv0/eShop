import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { IDeliveryMethod } from "../_models/deliveryMethod";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDeliveryMethods(){
    return this.http.get(this.baseUrl + 'order/deliverymethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      }
    ));
  }
}

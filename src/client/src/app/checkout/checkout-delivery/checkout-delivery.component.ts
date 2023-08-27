import { Component, Input, OnInit } from '@angular/core';
import { CheckoutService } from "../checkout.service";
import { FormGroup } from "@angular/forms";
import { IDeliveryMethod } from "../../_models/deliveryMethod";

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit{
  @Input() checkOutForm: FormGroup;
  deliveryMethods: IDeliveryMethod[];

  constructor(private checkOutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkOutService.getDeliveryMethods().subscribe((dm: any) => {
      this.deliveryMethods = dm;
      console.log(dm);
    }, error => {
      console.log(error);
    });
  }

}

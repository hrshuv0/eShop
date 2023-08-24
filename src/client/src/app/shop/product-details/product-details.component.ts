import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShopService } from "../shop.service";
import { IProduct } from "../../_models/product";
import { BreadcrumbService } from "xng-breadcrumb";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product: IProduct;


  constructor(private shopService: ShopService,
              private activateRoute: ActivatedRoute,
              private bcService: BreadcrumbService) {

  }
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error => {
      console.log(error);
    });
  }

}

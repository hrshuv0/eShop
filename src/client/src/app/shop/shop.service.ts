import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPagination} from "../_models/pagination";
import {IBrand} from "../_models/brand";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl:string = 'https://localhost:5001/api/';


  constructor(private http: HttpClient) { }

  getProducts(){
    console.log('base url: ', this.baseUrl + 'products');
    return this.http.get<IPagination>(this.baseUrl + 'products');
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
}

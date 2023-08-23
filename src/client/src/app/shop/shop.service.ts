import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { IPagination } from "../_models/pagination";
import { IBrand } from "../_models/brand";
import { map } from "rxjs";
import {ShopParams} from "../_models/shop-params";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl:string = 'https://localhost:5001/api/';


  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();
    if(shopParams.brandId != 0){
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if(shopParams.typeId != 0){
      params = params.append('typeId', shopParams.typeId.toString());
    }
    if(shopParams.search){
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());


    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        }
      ));
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/types');
  }
}

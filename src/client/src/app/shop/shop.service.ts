import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { IPagination, Pagination } from "../_models/pagination";
import { IBrand } from "../_models/brand";
import { map, of } from "rxjs";
import { ShopParams } from "../_models/shop-params";
import { IProduct } from "../_models/product";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl:string = 'https://localhost:5001/api/';
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IBrand[] = [];
  pagination = new Pagination();
  shopParams = new ShopParams();


  constructor(private http: HttpClient) { }

  getProducts(){
    let params = new HttpParams();
    if(this.shopParams.brandId != 0){
      params = params.append('brandId', this.shopParams.brandId.toString());
    }
    if(this.shopParams.typeId != 0){
      params = params.append('typeId', this.shopParams.typeId.toString());
    }
    if(this.shopParams.search){
      params = params.append('search', this.shopParams.search);
    }

    params = params.append('sort', this.shopParams.sort);
    params = params.append('pageIndex', this.shopParams.pageNumber.toString());
    params = params.append('pageSize', this.shopParams.pageSize.toString());


    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          this.products = [...this.products, ...response.body.data];
          this.pagination = response.body;
          return this.pagination;
        }
      ));
  }

  setShopParams(params: ShopParams){
    this.shopParams = params;
  }

  getShopParams(){
    return this.shopParams;
  }

  getProduct(id: number){
    const product = this.products.find(p => p.id === id);
    if(product){
      return of(product);
    }

    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getBrands(){
    if(this.brands.length > 0){
      return of(this.brands);
    }

    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands').pipe(
      map(response => {
        this.brands = response;
        return response;
      })
    );
  }

  getTypes(){
    if(this.types.length > 0){
      return of(this.types);
    }

    return this.http.get<IBrand[]>(this.baseUrl + 'products/types').pipe(
      map(response => {
        this.types = response;
        return response;
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ProductCategory } from '../Models/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

 apiUri: string = "http://localhost:9090/product-category/all-categories";

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ProductCategory[]>{

    return this.httpClient.get<ProductCategory[]>(`${this.apiUri}`);
  }

}

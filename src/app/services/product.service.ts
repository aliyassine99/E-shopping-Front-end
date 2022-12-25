import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   apiUri = "http://localhost:9090/products";
  constructor(private httpClient: HttpClient) {

   }

  getAllProductsPaginate(thePage: number,thePageSize: number): Observable<GetResponseProduct>{
    return  this.httpClient.get<GetResponseProduct>(`${this.apiUri}/all?page=${thePage}&size=${thePageSize}`);
  }

   getAllProductsByCategoryPaginate(thePage: number,thePageSize: number,id: number): Observable<GetResponseProduct>{
    return  this.httpClient.get<GetResponseProduct>(`${this.apiUri}/category/${id}?page=${thePage}&size=${thePageSize}`);
   }

   getProductByName(name: String): Observable<Product[]>{
    return  this.httpClient.get<Product[]>(`${this.apiUri}/search?name=${name}`);
   }

   getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.apiUri}/product/${id}`);
   }




}

interface GetResponseProduct{

    content: Product[],

  totalPages: number
  totalElements: number
  size: number
  number: number
}



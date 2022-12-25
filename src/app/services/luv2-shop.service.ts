import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Luv2ShopService {


  constructor() {

  }

  getCreditMonth(currentMonth: number): Observable<number[]>{
    let months: number [] = [];

    for (let month= currentMonth; month<=12; month++){
      months.push(month);
    }

    return of(months);

  }

  getCreditCardYear(): Observable<number[]>{
    let years: number[] = [];

    let currentYear = new Date().getFullYear();
    let endYear = currentYear + 10;

    for (let year= currentYear; year <= endYear; year++){
      years.push(year);
    }

    return of(years);


  }
}

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  arrayOfProducts: Product[]=[];

  constructor(private productService: ProductService, private route: Router){}
  productSearch(value: string){

    this.route.navigateByUrl(`/search/${value}`);


    this.productService.getProductByName(value).subscribe(
      response => { this.arrayOfProducts = response}
    );



  }

}

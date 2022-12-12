import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../Models/Product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product: Product = new Product();

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getTheProduct();

  }


  getTheProduct(){
    let productId: number = +this.route.snapshot.paramMap.get("id");
    this.productService.getProductById(productId).subscribe(
      data => this.product = data
    );
  }




}

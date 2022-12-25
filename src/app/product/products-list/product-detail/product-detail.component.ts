import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/Product";
import {CartItem} from "../../../models/cart-item";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product: Product = new Product();

  constructor(private route: ActivatedRoute, private productService: ProductService,private cartService: CartService) {
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


  addToCart() {

    const cartProduct = new CartItem(this.product);
    this.cartService.addToCart(cartProduct);

  }
}

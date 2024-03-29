import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit{

  totalPrice: number = 0.00;
  totalQuentity: number = 0;

  ngOnInit(): void {
    this.updateCartStatus();
  }

  constructor(private cartService: CartService) {



  }


   updateCartStatus() {

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuentity = data
    );
  }






}

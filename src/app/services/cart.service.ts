import { Injectable } from '@angular/core';
import {CartItem} from "../models/cart-item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[]= [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number>= new Subject<number>();






  constructor() { }

  addToCart(cartItemProduct: CartItem){

    let alreadyExistInCart: boolean;
    let existingCartItem: CartItem ;

      if(this.cartItems.length > 0){

        existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === cartItemProduct.id);

        alreadyExistInCart = (existingCartItem != undefined);

    }


      if(alreadyExistInCart){
        existingCartItem.quantity+=1;

      }
      else {
        this.cartItems.push(cartItemProduct);
      }

      this.camputeCartTotal();


  }

   camputeCartTotal() {

    let totalPriceValue= 0;
    let totalQuantityValue= 0;

    for (let cartItem of this.cartItems){
      totalPriceValue += cartItem.unitPrice * cartItem.quantity;
       totalQuantityValue+= cartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);

    this.totalQuantity.next(totalQuantityValue);


  }

  decrementQuantity(cartItem: CartItem){
    cartItem.quantity-=1;

    if(cartItem.quantity === 0 ){
      this.remove(cartItem);
    }
    else {
      this.camputeCartTotal();
    }

  }


   remove(cartItem: CartItem) {

    const itemIndex = this.cartItems.findIndex(tempCartItem => cartItem.id === tempCartItem.id);

    if(itemIndex > -1){
      this.cartItems.splice(itemIndex ,1);
      this.camputeCartTotal();
    }

  }
}

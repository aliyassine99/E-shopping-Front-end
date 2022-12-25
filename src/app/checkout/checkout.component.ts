import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../services/cart.service";
import {Luv2ShopService} from "../services/luv2-shop.service";
import {dateComparator} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  checkoutForm: FormGroup;

  years: number[] = [];
  months: number[] = [];

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService, private staticDataService: Luv2ShopService) {
  }

  ngOnInit(): void {

    this.checkoutForm = new FormGroup({
      "customer": new FormGroup({

        "firstName": new FormControl(null),
        "lastName": new FormControl(null),
        "email": new FormControl(null)

      }),
      "shippingAddress": new FormGroup({

        "street": new FormControl(null),
        "city": new FormControl(null),
        "state": new FormControl(null),
        "country": new FormControl(null),
        "zipCode": new FormControl(null),

      }),
      "billingAddress": new FormGroup({

        "street": new FormControl(null),
        "city": new FormControl(null),
        "state": new FormControl(null),
        "country": new FormControl(null),
        "zipCode": new FormControl(null),

      }),
      "creditCard": new FormGroup({

        "cardType": new FormControl(null),
        "nameOnCard": new FormControl(null),
        "cardNumber": new FormControl(null),
        "securityCode": new FormControl(null),
        "expirationMonth": new FormControl(null),
        "expirationYear": new FormControl(null)

      })


    });

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
    let currentMonth = new Date().getMonth() + 1;

    this.staticDataService.getCreditMonth(currentMonth).subscribe(
      data => {
        this.months = data

      }

    );

    this.staticDataService.getCreditCardYear().subscribe(
      data => {
        this.years = data

      }

    );


  }

  onSubmit(){
    console.log(this.checkoutForm.get("customer").value);
  }


  onChangeBillingAdressSameShippingAddress(event) {

    if(event.target.checked){
      this.checkoutForm.controls["billingAddress"].setValue(
        this.checkoutForm.controls["shippingAddress"].value
      );
    }

    else {
      this.checkoutForm.controls["billingAddress"].reset();
    }

  }

  onUpdateMonthDependOnYear() {
   const  currentYear: number = new Date().getFullYear();
   let startMonth: number;
   const selectedYear: any = this.checkoutForm.get("creditCard").get("expirationYear").value;



   if(currentYear == selectedYear){

     startMonth = new Date().getMonth() + 1;

   }

   else {
     startMonth= 1
   }

   this.staticDataService.getCreditMonth(startMonth).subscribe(
     data => this.months = data
   );





  }
}

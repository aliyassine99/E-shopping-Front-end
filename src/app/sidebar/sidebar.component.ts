import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../Models/ProductCategory';
import { ProductCategoryService } from '../services/product-category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{


  arrayOfCategories: ProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService){}



  ngOnInit(): void {


    this.getAllCategories();


  }

  getAllCategories(){
    this.productCategoryService.getCategories().subscribe(
      response =>{
        this.arrayOfCategories = response

      }
    )
  }
}

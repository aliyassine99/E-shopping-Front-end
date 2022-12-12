import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


    allProductsArray: Product[] = [];

   currentCategoryId: number;
   searchMode: boolean;

   thePageNumber: number= 1;
   thePageSize: number = 10;
   theTotalElements: number = 0;


  constructor(
        private productService: ProductService,
        private route: ActivatedRoute
  ){}
  ngOnInit(): void {

    this.listProducts();


  }




  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has("id");
    if(this.searchMode){
      this.route.paramMap.subscribe(()=>{
        this.getProductsByCategory()
      });
    }

    else{
      this.getAllProducts();
    }


  }

  getAllProducts(){
    this.productService.getAllProductsPaginate(this.thePageNumber - 1,this.thePageSize).subscribe(
      this.processResult()
    );
  }

  getProductsByCategory(){

      this.currentCategoryId = +this.route.snapshot.paramMap.get("id");

      this.productService.getAllProductsByCategoryPaginate(this.thePageNumber - 1,this.thePageSize,this.currentCategoryId).subscribe(
        this.processResult()


      );

  };

  processResult(){

    return data => {
      this.allProductsArray = data.content,
            this.thePageNumber = data.number +1 ,
            this.thePageSize = data.size,
            this.theTotalElements = data.totalElements
    }
  }


}

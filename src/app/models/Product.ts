import { ProductCategory } from "./ProductCategory";

export class Product{

  public  id: number;
  public  sku:string;
  public  name:string;
  public  category: ProductCategory;
  public  description:string;
  public  unitPrice:number;
  public  imageUrl:string;
  public  active:boolean;
  public  unitInStock:number


}

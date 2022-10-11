export interface PRODUCT_TS {
  created_at: string;
  description: string;
  id: string;
  price: number;
  ref: string;
  title: string;
  update_at: string;
  pictures?: Product_Picture[];
}
export interface Product_Picture {
  src: string;
}
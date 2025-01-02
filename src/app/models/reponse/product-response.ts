class ProductResponse {
  product_id: number = 0;
  product_name: string = '';
  product_price: number = 0;
  product_image: string = '';
  product_cate_id: number = 0;
  constructor(data?: Partial<ProductResponse>) {
    Object.assign(this, data);
  }
}

export default ProductResponse;

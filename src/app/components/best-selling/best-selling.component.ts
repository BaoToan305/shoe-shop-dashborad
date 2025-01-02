import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import ProductResponse from '../../models/reponse/product-response';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-best-selling',
  standalone: true,
  imports: [CommonModule,ProductItemComponent],
  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BestSellingComponent {
  products: ProductResponse[] = [
    {
      product_id: 1,
      product_name: 'Nike Structure 25',
      product_price: 160,
      product_image: 'assets/images/Nike Structure 25.png',
      product_cate_id: 1,
    },
    {
      product_id: 2,
      product_name: 'LeBron NXXT Gen AMPD EP',
      product_price: 160,
      product_image: 'assets/images/LeBron NXXT Gen AMPD EP.png',
      product_cate_id: 1,
    },
    {
      product_id: 3,
      product_name: 'Nike Invincible 3',
      product_price: 960,
      product_image: 'assets/images/Nike Invincible 3.png',
      product_cate_id: 2,
    },
    {
      product_id: 4,
      product_name: 'Nike Structure 25',
      product_price: 160,
      product_image: 'assets/images/Nike Structure 25.png',
      product_cate_id: 3,
    },
    {
      product_id: 5,
      product_name: 'Nike Structure 25',
      product_price: 160,
      product_image: 'assets/images/Nike Structure 25.png',
      product_cate_id: 3,
    },
  ];
}

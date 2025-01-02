import { Component,NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import ProductResponse from '../../models/reponse/product-response';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductListComponent {
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
      product_name: 'HAVIT HV-G92 Gamepad',
      product_price: 160,
      product_image: 'assets/images/Nike Invincible 3.png',
      product_cate_id: 3,
    },
    {
      product_id: 6,
      product_name: 'HAVIT HV-G92 Gamepad',
      product_price: 160,
      product_image: 'assets/images/Nike Structure 25.png',
      product_cate_id: 3,
    },
    {
      product_id: 7,
      product_name: 'HAVIT HV-G92 Gamepad',
      product_price: 160,
      product_image: 'assets/images/Nike Structure 25.png',
      product_cate_id: 3,
    },
  ];
}

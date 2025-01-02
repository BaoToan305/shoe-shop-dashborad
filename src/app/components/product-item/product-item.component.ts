import { Component,CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import ProductResponse from '../../models/reponse/product-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',

})
export class ProductItemComponent {
 @Input() product: ProductResponse = {
    product_id: 0,
    product_name: '',
    product_price: 0,
    product_image: '',
    product_cate_id: 0
  };
}

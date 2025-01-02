import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductHeaderComponent } from '../product-header/product-header.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FeaturedCollectionComponent } from '../featured-collection/featured-collection.component';
import { ImageForSubjectComponent } from '../image-for-subject/image-for-subject.component';
import { BestSellingComponent } from '../best-selling/best-selling.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ProductItemComponent,
    ProductHeaderComponent,
    ProductListComponent,
    FeaturedCollectionComponent,
    ImageForSubjectComponent,
    BestSellingComponent,
    ContactComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}

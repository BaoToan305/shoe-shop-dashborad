import { Component } from '@angular/core';
import { AdsSectionComponent } from '../ads-section/ads-section.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AdsSectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

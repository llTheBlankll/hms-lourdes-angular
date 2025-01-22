import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Image} from 'primeng/image';

@Component({
  selector: 'dashboard-medicine-card',
  imports: [
    Image
  ],
  templateUrl: './medicine-card.component.html',
  styleUrl: './medicine-card.component.css'
})
export class MedicineCardComponent {

  @Input()
  imageUrl?: string;

  @Input()
  title?: string;

  @Input()
  description?: string;
}

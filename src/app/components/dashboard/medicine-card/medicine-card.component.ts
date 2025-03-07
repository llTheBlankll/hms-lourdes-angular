import {Component, Input} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {Image} from 'primeng/image';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {PrimeTemplate} from 'primeng/api';
import {Badge} from 'primeng/badge';

@Component({
  selector: 'dashboard-medicine-card',
  imports: [
    Card,
    PrimeTemplate,
    NgOptimizedImage,
    DatePipe,
    Badge,
  ],
  templateUrl: './medicine-card.component.html',
  styleUrl: './medicine-card.component.css'
})
export class MedicineCardComponent {

  @Input()
  imageUrl?: string;

  @Input()
  cardTitle: string = "";

  @Input()
  description: string = "";

  @Input()
  expiryDate?: Date;

  @Input()
  isLoading: boolean = false;

  @Input()
  quantity: number = 0;
}

import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Image} from 'primeng/image';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'dashboard-medicine-card',
  imports: [
    Card,
    PrimeTemplate,
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
  subtitle: string = "";
}

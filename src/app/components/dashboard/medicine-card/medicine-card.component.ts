import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Image} from 'primeng/image';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';

@Component({
  selector: 'dashboard-medicine-card',
  imports: [
    Card,
    Button,
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

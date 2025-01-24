import {Component} from '@angular/core';
import {MedicineCardComponent} from '../../components/dashboard/medicine-card/medicine-card.component';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {TotalStorageComponent} from '../../components/dashboard/total-storage/total-storage.component';
import {TopMenuComponent} from '../../components/top-menu/top-menu.component';
import {TotalMedicinesComponent} from '../../components/dashboard/total-medicines/total-medicines.component';
import {Card} from 'primeng/card';
import {
  NearExpirationItemComponent
} from '../../components/dashboard/near-expiration-item/near-expiration-item.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MedicineCardComponent,
    Button,
    InputText,
    TotalStorageComponent,
    TopMenuComponent,
    TotalMedicinesComponent,
    Card,
    NearExpirationItemComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

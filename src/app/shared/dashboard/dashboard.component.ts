import {Component} from '@angular/core';
import {MedicineCardComponent} from '../../components/dashboard/medicine-card/medicine-card.component';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {TotalStorageComponent} from '../../components/dashboard/total-storage/total-storage.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MedicineCardComponent,
    Button,
    InputText,
    TotalStorageComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

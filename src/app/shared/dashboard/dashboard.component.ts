import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {TotalStorageComponent} from '../../components/dashboard/total-storage/total-storage.component';
import {TopMenuComponent} from '../../components/top-menu/top-menu.component';
import {TotalMedicinesComponent} from '../../components/dashboard/total-medicines/total-medicines.component';
import {Card} from 'primeng/card';
import {
  NearExpirationItemComponent
} from '../../components/dashboard/near-expiration-item/near-expiration-item.component';
import {MedicinesService} from '../../all/medicines/services/medicines.service';
import {ApolloQueryResult} from '@apollo/client';
import {MedicineDTO} from '../../types/medicineDTO';
import {StoragesService} from '../../all/storages/services/storages.service';
import {StorageDTO} from '../../all/storages/types/types';
import {ProgressSpinner} from 'primeng/progressspinner';
import {StorageItemsService} from '../../all/storage-items/services/storage-items.service';
import {StorageItemDTO} from '../../all/storage-items/types/types';
import {DatePipe} from '@angular/common';
import {MedicineCardComponent} from '../../components/dashboard/medicine-card/medicine-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    Button,
    InputText,
    TotalStorageComponent,
    TopMenuComponent,
    TotalMedicinesComponent,
    Card,
    NearExpirationItemComponent,
    ProgressSpinner,
    DatePipe,
    MedicineCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  private readonly storageItemService = inject(StorageItemsService);
  private readonly storageService = inject(StoragesService);

  protected storageLoading = false;
  protected storageItemLoading = false;

  protected storageSelected?: StorageDTO;
  protected storages: StorageDTO[] = [];

  protected storageItems: StorageItemDTO[] = [];

  ngOnInit(): void {
    this.storageLoading = true;
    this.storageService.listAll(0, 100).valueChanges.subscribe({
      next: (result) => {
        const resultData = result.data as {
          storages: StorageDTO[]
        };

        this.storages = resultData.storages;
        this.storageLoading = false;
      }
    });
  }

  public selectStorage(id: String) {
    // * After selecting storage, show the medicines in that storage.
    this.storageItemService.listAllByStorage(id, 0, 100).valueChanges.subscribe({
      next: (result) => {
        const resultData = result.data as {
          listAllByStorage: StorageItemDTO[]
        };

        this.storageItems = resultData.listAllByStorage;
        console.log(this.storageItems);
        this.storageItemLoading = false;
      },
      error: (error) => {
        console.error('Error fetching storage items:', error);
        this.storageItemLoading = false;
      }
    });
  }
}

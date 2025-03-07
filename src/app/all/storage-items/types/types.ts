import {StorageDTO} from '../../storages/types/types';
import {MedicineDTO} from '../../../types/medicineDTO';

export interface StorageItemDTO {
  id: String;
  storage: StorageDTO;
  medicine: MedicineDTO;
  expiryDate: Date;
  quantity: number;
}

export interface StorageItemInput {

}

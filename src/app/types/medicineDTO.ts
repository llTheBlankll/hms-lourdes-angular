import {MedicineCategory} from '../all/storages/enums/MedicineCategory';

export interface MedicineDTO {
  id: string;
  name: string;
  imageUrl: string;
  genericName: string;
  description: string;
  category: MedicineCategory;
  stock: number;
  expiryDate: Date;
  unitPrice: number;
  reorderLevel: number;
}

export interface MedicineInput {
  name: string;
  imageUrl: string;
  genericName: string;
  description: string;
  category: MedicineCategory;
  stock: number;
  expiryDate: Date;
  unitPrice: number;
  reorderLevel: number;
}

import {MedicineCategory} from '../../storages/enums/MedicineCategory';

export interface MedicineDTO {
  id: String;
  name: String;
  imageUrl: String;
  description: String;
  category: MedicineCategory;
  stock: number;
  expiryDate: Date;
  unitPrice: number;
  reorderLevel: number;
}

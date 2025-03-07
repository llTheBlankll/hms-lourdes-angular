export interface StorageDTO {
  id: String;
  name: String;
  location: String;
  lastUpdated: Date;
}

export interface StorageInput {
  name: String;
  location: String;
  lastUpdated: Date;
}

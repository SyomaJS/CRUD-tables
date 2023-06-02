CREATE TABLE `medicines`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `manafacture` VARCHAR(255) NOT NULL,
    `medicine_type` BIGINT NOT NULL,
    `price` FLOAT(8, 2) NOT NULL,
    `expiry_date` DATE NOT NULL,
    `info` TEXT NOT NULL
);

CREATE TABLE stock (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  medicine_id BIGINT NOT NULL,
  pharmacy_id BIGINT NOT NULL,  
  quantity BIGINT NOT NULL
);

CREATE TABLE `medicine_type`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `pharmacies`(
    `id` BIGINT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `region_id` BIGINT NOT NULL,
    `district_id` BIGINT NOT NULL
);

CREATE TABLE `district`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` BIGINT NOT NULL,
    `region_id` BIGINT NOT NULL
);

CREATE TABLE `region`(
    `id` BIGINT  NOT NULL  PRIMARY KEY,
    `name` BIGINT NOT NULL
);







{
  "name": "Medicine 1",
  "manufacture": "Manufacturer Name 1",
  "medicine_type": 1,
  "price": 10.99,
  "expiry_date": "2023-06-30",
  "info": "Additional information about the medicine"
}




{
    "name": "name 1",
    "address": "address 1",
    "location": "location 1",
    "phone": "phone 1",
    "email": "email 1",
    "region_id": 1
    "district_id": 2
}




ALTER TABLE
    `pharmacies` ADD CONSTRAINT `pharmacies_district_id_foreign` FOREIGN KEY(`district_id`) REFERENCES `district`(`id`);
ALTER TABLE
    `stock` ADD CONSTRAINT `stock_medicine_id_foreign` FOREIGN KEY(`medicine_id`) REFERENCES `medicines`(`id`);
ALTER TABLE
    `stock` ADD CONSTRAINT `stock_pharmacy_id_foreign` FOREIGN KEY(`pharmacy_id`) REFERENCES `pharmacies`(`id`);
ALTER TABLE
    `pharmacies` ADD CONSTRAINT `pharmacies_region_id_foreign` FOREIGN KEY(`region_id`) REFERENCES `region`(`id`);
ALTER TABLE
    `medicines` ADD CONSTRAINT `medicines_medicine_type_foreign` FOREIGN KEY(`medicine_type`) REFERENCES `medicine_type`(`id`);
ALTER TABLE
    `district` ADD CONSTRAINT `district_region_id_foreign` FOREIGN KEY(`region_id`) REFERENCES `region`(`id`);
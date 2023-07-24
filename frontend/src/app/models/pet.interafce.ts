import {Pet} from "./enums/pet.enum";
import {City} from "./enums/city.enum";
import {Image} from "./image.interface";

export interface PetEntity {
  id: string | null
  name: string,
  kindOfPet: Pet,
  city: City,
  street: string,
  building: string,
  latitude: number,
  longitude: number,
  images: Image[]
  dateFrom: Date
  dateTo: Date
}

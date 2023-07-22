import {Pet} from "./enums/pet.enum";

export interface ListItem {
  id: string,
  kindOfAnimal: Pet,
  species: string,
  imageUrl: string,
  city: string,
  price: number,
  currency: string
}

import {Animal} from "./enums/animal";

export interface ListItem {
  id: string,
  kindOfAnimal: Animal,
  species: string,
  imageUrl: string,
  city: string,
  price: number,
  currency: string
}

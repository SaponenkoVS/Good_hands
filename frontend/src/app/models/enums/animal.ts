export enum Animal {
  DOG,
  CAT
}

export function enumLabel(animalEnum: Animal) {
  switch (animalEnum) {
    case 0:
      return "Dog"
    case 1:
      return "Cat"
    default:
      return ''
  }

}

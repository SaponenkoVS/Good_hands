export enum Pet {
  Dog,
  Cat,
  Snake
}

export function petEnumLabel(pet: Pet) {
  switch (pet) {
    case 0:
      return "Dog"
    case 1:
      return "Cat"
    case 2:
      return "Snake"
    default:
      return ''
  }

}

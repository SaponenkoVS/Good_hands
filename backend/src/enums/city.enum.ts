export enum City {
    Warsaw,
    Wrocław,
    Poznań,
    Gdańsk,
    Kraków,
    Łódż,
}

export function cityEnumLabel(city: City) {
    switch (city) {
        case 0:
            return "Warsaw"
        case 1:
            return "Wrocław"
        case 2:
            return "Poznań"
        case 3:
            return "Gdańsk"
        case 4:
            return "Kraków"
        case 5:
            return "Łódż"
        default:
            return ''
    }

}

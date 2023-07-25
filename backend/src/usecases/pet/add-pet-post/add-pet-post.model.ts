import {Image} from "@prisma/client";

export interface AddPetPostModel {
    petName: String
    city: String
    street: String
    building: String
    latitude: String
    longitude: String
    dateFrom: Date
    dateTo: Date
    images: Image[]
}
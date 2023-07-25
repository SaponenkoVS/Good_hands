import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../../prisma/prisma.service";
import {AddPetPostModel} from "./add-pet-post.model";

@Injectable()
export class AddPetPostUsecase {
    constructor(private prismaService: PrismaService) {
    }

    execute(addPetPostRequest: AddPetPostModel) {
        // return this.prismaService.petPost.create({
        //     data: {
        //         petName: addPetPostRequest.petName,
        //         city: addPetPostRequest.city,
        //         street: addPetPostRequest.street,
        //         building: addPetPostRequest.building,
        //         latitude: addPetPostRequest.latitude,
        //         longitude: addPetPostRequest.longitude,
        //         dateFrom: addPetPostRequest.dateFrom,
        //         dateTo: addPetPostRequest.dateTo,
        //         images: addPetPostRequest.images
        //     }
        // })
    }
}
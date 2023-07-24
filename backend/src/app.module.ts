import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaService} from "./prisma/prisma.service";
import {PetController} from "./adapters/pet/pet.controller";

@Module({
    imports: [],
    controllers: [AppController, PetController],
    providers: [AppService, PrismaService],
})
export class AppModule {
}

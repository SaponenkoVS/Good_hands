import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {PrismaPromise, User} from "@prisma/client";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): PrismaPromise<User[]> {
        return this.appService.getHello();
    }
}

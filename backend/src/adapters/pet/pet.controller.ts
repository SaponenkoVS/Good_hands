import {Body, Controller, Get, Post} from '@nestjs/common';

@Controller('api/pet')
export class PetController {
    constructor() {
    }

    @Post('add-pet')
    createPost(@Body() postData: any) {
        console.log(postData)
    }

    @Get()
    getHello(): string {
        return 'Hello from MyController!';
    }
}
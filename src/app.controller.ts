import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('name')
  getHello(@Query() request): Promise<any> {
    return this.appService.getHello(request.id);
  }
}

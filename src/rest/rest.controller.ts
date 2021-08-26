import { Controller, Get } from '@nestjs/common';
import { RestService } from './rest.service';

@Controller('/test')
export class RestController {
  constructor(private readonly restService: RestService) {}

  @Get('/get/problem')
  getProblem() {
    return this.restService.getProblem();
  }
}

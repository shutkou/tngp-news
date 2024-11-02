import { Controller, Get } from '@nestjs/common';

@Controller('')
export class ApiController {
  constructor() {}

  @Get()
  getCameras(): string {
    return 'API controller works';
  }
}

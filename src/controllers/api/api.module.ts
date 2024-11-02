import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';

@Module({
  controllers: [ApiController],
  providers: [],
  imports: [],
  exports: [],
})
export class ApiModule {}

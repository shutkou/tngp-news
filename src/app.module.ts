import { Module } from '@nestjs/common';
import { AppRouter } from './app.router';
import { ApiModule } from './controllers/api/api.module';
import { ContentModule } from './controllers/content/content.module';

@Module({
  imports: [AppRouter, ApiModule, ContentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

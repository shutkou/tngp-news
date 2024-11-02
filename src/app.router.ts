import { RouterModule } from '@nestjs/core/router';
import { ContentModule } from './controllers/content/content.module';
import { ApiModule } from './controllers/api/api.module';

export const AppRouter = RouterModule.register([
  {
    path: 'api',
    module: ApiModule,
  },
  {
    path: '*',
    module: ContentModule,
  },
]);

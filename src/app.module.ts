import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as multer from 'multer';
import { AppGuard } from './app/app.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppGuard],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(multer({ dest: './uploads' }).array('files'))
      .forRoutes('upload');
  }
}

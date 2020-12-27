import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsContoller} from './controllers/cats.controller'
import { DogsController } from './controllers/dogs/dogs.controller';
import { CatsModule } from './modules/cats.module';
import { CatsService } from './services/CatsService';
import { APP_PIPE } from '@nestjs/core'
import { ValidationPipe } from './validation.pipe';
@Module({
  imports: [CatsModule],
  controllers: [AppController, DogsController, CatsContoller],
  providers: [AppService, CatsService, {provide: APP_PIPE, useClass: ValidationPipe}],
})
export class AppModule {}

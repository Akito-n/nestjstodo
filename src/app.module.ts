import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsContoller} from './controllers/cats.controller'
import { DogsController } from './controllers/dogs/dogs.controller';
import { CatsService } from './services/CatsService';

@Module({
  imports: [],
  controllers: [AppController, DogsController, CatsContoller],
  providers: [AppService, CatsService],
})
export class AppModule {}

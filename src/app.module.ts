import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsContoller} from './modules/controllers/cats.controller'
import { DogsController } from './modules/controllers/dogs/dogs.controller';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [DogModule],
  controllers: [AppController, DogsController, CatsContoller],
  providers: [AppService],
})
export class AppModule {}

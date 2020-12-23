import { Module } from '@nestjs/common'
import { CatsContoller } from 'src/controllers/cats.controller'
import { CatsService } from 'src/services/CatsService'


@Module({
  controllers: [CatsContoller],
  providers: [CatsContoller]
})

export class CatsModule {}

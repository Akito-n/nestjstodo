import { Module } from '@nestjs/common'
import { CatsContoller } from 'src/controllers/cats.controller'
import { CatsService } from 'src/services/CatsService'

//@Global()
@Module({
  controllers: [CatsContoller],
  providers: [CatsService],
  exports:[CatsService]
})

export class CatsModule {}

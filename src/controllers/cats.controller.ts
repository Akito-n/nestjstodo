import { Controller, Get, Post, Body } from '@nestjs/common'
import { CreateCatDto } from '../dto/create-cat.dto'
import {CatsService } from '../services/CatsService'
import { Cat } from '../interfaces/cat.interface'


@Controller('cats')

export class CatsContoller {
  constructor(private catsService: CatsService){}

  @Post()
  async create(@Body() createCatDto :CreateCatDto){
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}

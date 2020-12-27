import { Controller, Get, Post, Body, Param, ParseIntPipe, UsePipes, ValidationPipe} from '@nestjs/common'
import { CreateCatDto } from '../dto/create-cat.dto'
import {CatsService } from '../services/CatsService'
import { Cat } from '../interfaces/cat.interface'


@Controller('cats')

export class CatsContoller {
  constructor(private catsService: CatsService){}

  @Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto :CreateCatDto){
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

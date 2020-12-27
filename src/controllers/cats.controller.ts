import { Controller, Get, Post, Body, Param, ParseIntPipe, UsePipes, Query, DefaultValuePipe, ParseBoolPipe, SetMetadata} from '@nestjs/common'
import { CreateCatDto } from '../dto/create-cat.dto'
import {CatsService } from '../services/CatsService'
import { Cat } from '../interfaces/cat.interface'
import { query } from 'express';
import { ValidationPipe } from 'src/validation.pipe';
import { Roles } from 'src/roles.decorator';


@Controller('cats')

export class CatsContoller {
  constructor(private catsService: CatsService){}

  @Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}

  @Post()
  @Roles('admin')
  async create(@Body(new ValidationPipe()) createCatDto :CreateCatDto){
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe) activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}

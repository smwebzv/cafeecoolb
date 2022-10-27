import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DrinksService } from './drinks.service';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';

@ApiTags('Drinks')
@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createDrinkDto: CreateDrinkDto) {
    return this.drinksService.create(createDrinkDto);
  }

  @Get()
  findAll() {
    return this.drinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drinksService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrinkDto: UpdateDrinkDto) {
    return this.drinksService.update(+id, updateDrinkDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drinksService.remove(+id);
  }
}

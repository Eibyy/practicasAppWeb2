import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AspiranteService } from './aspirante.service';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAnspiranteDto } from './dto/update-aspirante.dto';

@Controller('aspirante')
export class AspiranteController {
  constructor(private readonly anspiranteService: AspiranteService) {}

  @Post()
  create(@Body() createAnspiranteDto: CreateAspiranteDto) {
    return this.anspiranteService.create(createAnspiranteDto);
  }

  @Get()
  findAll() {
    return this.anspiranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.anspiranteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAnspiranteDto: UpdateAnspiranteDto) {
    return this.anspiranteService.update(id, updateAnspiranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.anspiranteService.remove(id);
  }

  @Patch('soft-delete/:id')
  softDelete(@Param('id', ParseIntPipe) id: number) {
    return this.aspiranteService.softDelete(id);
  }
}

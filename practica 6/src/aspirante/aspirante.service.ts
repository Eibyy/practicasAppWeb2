import { Injectable } from '@nestjs/common';
import { CreateAspiranteDto } from './dto/create-anspirante.dto';
import { UpdateAnspiranteDto } from './dto/update-aspirante.dto';
import { Repository } from 'typeorm';
import { Aspirante } from './entities/aspirante.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AspiranteService {
  constructor(
    @InjectRepository(Aspirante)
    private readonly aspiranteRepository: Repository<Aspirante>
  ) {}

  async create(createAspiranteDto: CreateAspiranteDto) {
    const aspirante = this.aspiranteRepository.create(createAspiranteDto);
    return this.aspiranteRepository.save(aspirante);
  }

  async findAll() {
    return this.aspiranteRepository.find();
  }

  async findOne(id: number) {
    return this.aspiranteRepository.findOneBy({ id });
  }

  async update(id: number, updateAspiranteDto: UpdateAnspiranteDto) {
    const updated = await this.aspiranteRepository.update(id, updateAspiranteDto);
    return updated.affected > 0 ? this.aspiranteRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const aspirante = await this.findOne(id);
    aspirante.estado = 'Desactivo';
    return this.aspiranteRepository.save(aspirante);
  }
  async softDelete(id: number): Promise<void> {
    const aspirante = await this.aspiranteRepository.findOne({ where: { id } });
    if (!aspirante) {
      throw new NotFoundException(`Aspirante with ID ${id} not found`);
    }

    aspirante.estado = 'Inactivo';
    await this.aspiranteRepository.save(aspirante);
  }
}

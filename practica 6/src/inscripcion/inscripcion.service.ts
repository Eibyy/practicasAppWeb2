import { Injectable } from '@nestjs/common';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import { Repository } from 'typeorm';
import { Inscripcion } from './entities/inscripcion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InscripcionService {
  constructor(
    @InjectRepository(Inscripcion)
    private readonly inscripcionRepository: Repository<Inscripcion>
  ) {}

  async create(createInscripcionDto: CreateInscripcionDto) {
    const inscripcion = this.inscripcionRepository.create({
      ...createInscripcionDto,
      curso: { id: createInscripcionDto.id_curso },
      aspirante: { id: createInscripcionDto.id_aspirante }
    });
    await this.inscripcionRepository.save(inscripcion);
    return inscripcion;
  }

  async findAll() {
    return this.inscripcionRepository.find();
  }

  async findOne(id: string) {
    return this.inscripcionRepository.findOneBy({ id });
  }

  async update(id: string, updateInscripcionDto: UpdateInscripcionDto) {
    const updated = await this.inscripcionRepository.update(id, updateInscripcionDto);
    return updated.affected > 0 ? this.inscripcionRepository.findOneBy({ id }) : null;
  }

  async remove(id: string) {
    const inscripcion = await this.findOne(id);
    if (!inscripcion) return null;
    inscripcion.estado = 'Desactivo';
    return this.inscripcionRepository.save(inscripcion);
  }
  async softDelete(id: number): Promise<void> {
    const inscripcion = await this.inscripcionRepository.findOne({ where: { id } });
    if (!inscripcion) {
      throw new NotFoundException(`Inscripcion with ID ${id} not found`);
    }

    inscripcion.estado = 'Inactivo';
    await this.inscripcionRepository.save(inscripcion);
  }
}

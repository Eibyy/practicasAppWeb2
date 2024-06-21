import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>
  ) {}

  async create(createCursoDto: CreateCursoDto) {
    const curso = this.cursoRepository.create(createCursoDto);
    return this.cursoRepository.save(curso);
  }

  async findAll() {
    return this.cursoRepository.find();
  }

  async findOne(id: number) {
    return this.cursoRepository.findOneBy({ id });
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    const updated = await this.cursoRepository.update(id, updateCursoDto);
    return updated.affected > 0 ? this.cursoRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const curso = await this.findOne(id);
    curso.estado = 'Desactivo';
    return this.cursoRepository.save(curso);
  }
  async softDelete(id: number): Promise<void> {
    const curso = await this.cursoRepository.findOne({ where: { id } });
    if (!curso) {
      throw new NotFoundException(`Curso with ID ${id} not found`);
    }

    curso.estado = 'Inactivo';
    await this.cursoRepository.save(curso);
  }
}

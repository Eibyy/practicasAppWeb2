import { PartialType } from '@nestjs/mapped-types';
import { CreateAspiranteDto } from './create-anspirante.dto';

export class UpdateAnspiranteDto extends PartialType(CreateAspiranteDto) {}

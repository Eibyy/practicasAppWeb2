import { IsOptional, IsString, IsNotEmpty, IsInt, MinLength, Min } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateInscripcionDto {
  @PrimaryGeneratedColumn('uuid')
  @Column({ primary: true, unique: true })
  id: string;

  @IsInt()
  @Min(1)
  id_curso: number;

  @IsInt()
  @Min(1)
  id_aspirante: number;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  hora: string;

  @IsInt()
  @Min(0)
  valor_cancelado: number;

  @IsString()
  @IsNotEmpty()
  estado: string = "Activo"; // Valor por defecto
}

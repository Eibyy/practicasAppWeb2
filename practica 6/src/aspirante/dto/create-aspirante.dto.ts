import { IsOptional, IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateAspiranteDto {
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  identificacion: string;

  @IsString()
  @IsNotEmpty()
  estado: string = "Activo"; // Valor por defecto
}

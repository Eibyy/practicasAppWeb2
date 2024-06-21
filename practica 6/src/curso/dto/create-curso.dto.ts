import { IsOptional, IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateCursoDto {
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  fecha_inicio: string;

  @IsString()
  @IsNotEmpty()
  estado: string = "Activo"; // Valor por defecto
}

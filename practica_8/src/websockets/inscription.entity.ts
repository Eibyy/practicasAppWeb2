import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  curso_id: number;

  @Column()
  aspirante_id: number;

  @Column()
  fecha: Date;

  @Column()
  hora: string;

  @Column()
  valorCancelado: number;
}

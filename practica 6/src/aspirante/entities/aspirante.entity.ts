import { Inscripcion } from 'src/inscripcion/entities/inscripcion.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'aspirante'})
export class Aspirante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;

    @Column('text')
    identificacion: string;

    @Column('text', { default: 'Activo' })
    estado: string;

    @OneToMany(
        () => Inscripcion,
        ( inscripcion ) => inscripcion.aspirante,
        { cascade: true }
    )
    inscripciones?: Inscripcion[];
}

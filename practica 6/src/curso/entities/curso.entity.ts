import { Inscripcion } from 'src/inscripcion/entities/inscripcion.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'curso'})
export class Curso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    descripcion: string;

    @Column('text')
    fecha_inicio: string;

    @Column('text', { default: 'Activo' })
    estado: string;

    @OneToMany(
        () => Inscripcion,
        ( inscripcion ) => inscripcion.curso,
        { cascade: true }
    )
    inscripciones?: Inscripcion[];
}

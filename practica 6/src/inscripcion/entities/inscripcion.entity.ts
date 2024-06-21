import { Curso } from 'src/curso/entities/curso.entity';
import { Aspirante } from 'src/aspirante/entities/aspirante.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({name: 'inscripcion'})
export class Inscripcion {

    @PrimaryGeneratedColumn('uuid')
    @Column({ primary: true, unique: true })
    id: string;

    @Column('integer')
    id_curso: number;

    @Column('integer')
    id_aspirante: number;

    @Column('text')
    fecha: string;

    @Column('text')
    hora: string;

    @Column('integer')
    valor_cancelado: number;

    @Column('text', { default: 'Activo' })
    estado: string;

    @ManyToOne(
        () => Curso,
        ( curso ) => curso.inscripciones,
        { eager: true }
    )
    curso?: Curso;

    @ManyToOne(
        () => Aspirante,
        ( aspirante ) => aspirante.inscripciones,
        { eager: true }
    )
    aspirante?: Aspirante;
}

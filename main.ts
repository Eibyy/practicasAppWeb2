import {mostrarCursos, mostrarAspirantes, mostrarInscripciones} from "./recorrer_areglos"
import { buscarPorID } from "./callback"


interface ICurso{
    id: number,
    descripcion: string,
    fecha_de_inicio: string
}

interface IAspirante{
    id: number,
    nombre: string,
    identificacion: number
}
interface IInscripcion{
    id: number,
    curso_id: number,
    aspirante_id: number,
    fecha: string,
    hora: string,
    valor_cancelado: number
}

const curso:ICurso[] = [
    {id: 1, descripcion: "Curso de Robotica", fecha_de_inicio:"2 de abril"},
    {id: 2, descripcion: "Curso de Ingles", fecha_de_inicio:"4 de mayo"},
    {id: 3, descripcion: "Curso de C++", fecha_de_inicio:"3 de octubre"},
    {id: 4, descripcion: "Curso de Natacion", fecha_de_inicio:"18 de marzo"},
    {id: 5, descripcion: "Curso de Inteligencia Artificial", fecha_de_inicio:"4 de noviembre"}
]

const aspirante:IAspirante[] = [
    {id: 1, nombre:"Bryan", identificacion:1311929978},
    {id: 2, nombre:"Silvia", identificacion:8265839678},
    {id: 3, nombre:"John", identificacion:186937569},
    {id: 4, nombre:"Francisco", identificacion:132750746},
    {id: 5, nombre:"Laura", identificacion:235736184}
]

const inscripcion:IInscripcion[] = [
    {id: 1, curso_id:3, aspirante_id: 1, fecha:"3 de febrero", hora: "13:23", valor_cancelado: 20.50},
    {id: 2, curso_id:2, aspirante_id: 4, fecha:"7 de febrero", hora: "14:56", valor_cancelado: 17.75},
    {id: 3, curso_id:3, aspirante_id: 3, fecha:"3 de febrero", hora: "20:39", valor_cancelado: 20.50},
    {id: 4, curso_id:1, aspirante_id: 2, fecha:"2 de febrero", hora: "17:33", valor_cancelado: 31.40},
    {id: 5, curso_id:4, aspirante_id: 5, fecha:"4 de febrero", hora: "09:17", valor_cancelado: 23.00}
]

mostrarAspirantes(aspirante)
mostrarCursos(curso)
mostrarInscripciones(inscripcion)

buscarPorID(inscripcion, 3, (error,objeto)=>{
    if(error){
        console.error(error)
    }else{
        console.log("La inscripcion con este id es: ", objeto)
    }
})
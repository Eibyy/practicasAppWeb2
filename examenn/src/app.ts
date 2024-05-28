import express from "express"
import {aspiranteRoute, cursoRoute, inscripcionRoute, entornoRoute  } from "./routes";

const app = express()
const port = 3000

app.use(express.json())
app.use('/curso', cursoRoute)
app.use('/aspirante', aspiranteRoute)
app.use('/inscripcion', inscripcionRoute)
app.use('/entorno', entornoRoute)



app.listen(port, () => {
    console.log("Conectado al puerto: ", port)
})

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

//Actualizando de desarrollo a prueba
async function actualizar(){
    const desarrolloCurso = await prisma.curso.updateMany({
        where: {entornoId: 1},
        data: {entornoId: 2}
    })
    const desarrolloAspirante = await prisma.aspirante.updateMany({
        where: {entornoId: 1},
        data: {entornoId: 2}
    })
    const desarrolloInscripcion = await prisma.inscripcion.updateMany({
        where: {entornoId: 1},
        data: {entornoId: 2}
    })
    const totalPruebas = (desarrolloCurso.count + desarrolloAspirante.count + desarrolloInscripcion.count)

    //Actualizando de prueba a desarrollo
    const pruebaCurso = await prisma.curso.updateMany({
        where: {entornoId: 2},
        data: {entornoId: 1}
    })
    const pruebaAspirante = await prisma.aspirante.updateMany({
        where: {entornoId: 2},
        data: {entornoId: 1}
    })
    const pruebaInscripcion = await prisma.inscripcion.updateMany({
        where: {entornoId: 2},
        data: {entornoId: 1}
    })

    const totalDesarrollo = (pruebaCurso.count + pruebaAspirante.count + pruebaInscripcion.count)
    console.log(pruebaCurso)
    const mensaje = console.log("Cambios de prueba a desarrollo: "+totalDesarrollo+ " Cambios de desarrollo a prueba: "+ totalPruebas)
    await prisma.$disconnect();
    return mensaje
}

actualizar()
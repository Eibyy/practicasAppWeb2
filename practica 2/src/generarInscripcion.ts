import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
//Punto 2
async function generarInscripciones() { 
  const cursos = await prisma.curso.findMany()
  const aspirantes = await prisma.aspirante.findMany()

  for (let i = 0; i < 10; i++) {
    const curso = cursos[Math.floor(Math.random() * cursos.length)]
    const aspirante = aspirantes[Math.floor(Math.random() * aspirantes.length)]
    const fecha = '2024-05-10'
    const hora = '15:00'
    const valorCancelado = Math.random() * 1000

    await prisma.inscripcion.create({
      data: {
        curso: { connect: { id: curso.id } },
        aspirante: { connect: { id: aspirante.id } },
        fecha,
        hora,
        valor_cancelado: valorCancelado,
      }
    })
  }
}  

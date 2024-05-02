import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//Punto 4
async function main(id:number) { 
  const transacciones = await prisma.inscripcion.findMany({
    where: { id: id },
    include: {
      curso: {
        select: {
          descripcion: true,
          fecha_de_inicio: true
        }
      },
      aspirante: {
        select: {
          nombre: true,
          identificacion: true
        }
      }
    }
  });

  console.log('Transacciones encontradas:');
  transacciones.forEach((transaccion) => {
    console.log('--------------------------');
    console.log('ID de la transacción:', transaccion.id);
    console.log('Fecha:', transaccion.fecha);
    console.log('Hora:', transaccion.hora);
    console.log('Valor cancelado:', transaccion.valor_cancelado);
    console.log('Curso:', transaccion.curso.descripcion);
    console.log('Fecha de inicio del curso:', transaccion.curso.fecha_de_inicio);
    console.log('Aspirante:', transaccion.aspirante.nombre);
    console.log('Identificación del aspirante:', transaccion.aspirante.identificacion);
    console.log('--------------------------');
  });
}



main(7)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
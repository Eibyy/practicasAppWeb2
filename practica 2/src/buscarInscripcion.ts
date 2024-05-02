import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
//Punto 3
async function buscarInscripcion(id:number) { 
  const transaccion = await prisma.inscripcion.findUnique({
    where: {
      id: id
    }
  });

  if (transaccion) {
    console.log('Transacción encontrada:');
    console.log(transaccion);
  } else {
    console.log('No se encontró ninguna transacción con el ID proporcionado.');
  }
}

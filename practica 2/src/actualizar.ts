import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function actualizar(){
    //Bucle for y despues un if?
    //guardar en un arreglo los que ya se han usado
    var contadorPrueba = 0
    var contadorDesarrollo = 0
    const cambios = []
    const cambiosCurso = await prisma.curso.findMany({
        where:{entornoId:{in:[1,2]}}
    })
    cambios.push(...cambiosCurso)
    const cambiosAspirante = await prisma.curso.findMany({
        where:{entornoId:{in:[1,2]}}
    })
    cambios.push(...cambiosAspirante)

    const cambiosInscripcion = await prisma.curso.findMany({
        where:{entornoId:{in:[1,2]}}
    })
    cambios.push(...cambiosInscripcion)

    for(let i=0; i<cambios.length;i++){
        const curso = cambios[i]
        if(curso.entornoId==1){
            await prisma.curso.update({
                where:{id: curso.id},
                data:{entornoId:2}
            })
            contadorPrueba++
        }else if(curso.entornoId == 2){
            await prisma.curso.update({
                where:{id: curso.id},
                data:{entornoId:1}
            })
            contadorDesarrollo++
        }
        
    }
    console.log("Los nuevos datos en estado desarrollo son: "+ contadorDesarrollo + "\nLos nuevos datos en estado Prueba son: " + contadorPrueba)
    return[contadorDesarrollo, contadorPrueba]
}


actualizar()
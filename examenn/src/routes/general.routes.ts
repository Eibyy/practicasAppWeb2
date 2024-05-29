import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient()
const router = Router()
//Ruta para cuando queramos hacer actualizaciones a cualquier tabla

router.put('/:name/:id_entidad/:id_entorno',async (req, res) =>{
    const name = req.params.name
    const id_entidad = parseInt(req.params.id_entidad)
    const id_entorno = parseInt(req.params.id_entorno)
    if(name=="curso"){
        const cambio = await prisma.curso.update({
            where:{id:id_entidad},
            data:{entornoId: id_entorno}
        })
        res.json(cambio)
    }else if (name=="inscripcion"){
        const cambio = await prisma.inscripcion.update({
            where:{id:id_entidad},
            data:{entornoId: id_entorno}
        })
        res.json(cambio)
    }else if(name =="aspirante"){
        const cambio = await prisma.inscripcion.update({
            where:{id:id_entidad},
            data:{entornoId: id_entorno}
        })
        res.json(cambio)
    }
})


export default router
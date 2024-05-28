import {PrismaClient} from "@prisma/client"
import { Router } from "express";

const router = Router()
const prisma = new PrismaClient()


router.get("/", async (req, res)=>{
    const entornos = await prisma.entorno.findMany()
    res.json(entornos)
})

router.post('/',async (req, res) =>{
    const{descripcion} = req.body
    const nuevo_entorno = await prisma.entorno.create({
        data:{
            descripcion
        }
    })
    res.json({"Servidor": "Se ha agregado el nuevo entorno" , "entorno" : nuevo_entorno})
})

// router.put('/:name/:id_entidad/:id_entorno',async (req, res) =>{
//     const name = req.params.name
//     const id_entidad = parseInt(req.params.id_entidad)
//     const id_entorno = parseInt(req.params.id_entorno)
//     const {entorno} = req.body
//     const cambio = await prisma.
//     const cambio2 = await prisma.entorno.update({
//         where:{id:id},
//         data:{
//             entorno: entorno
//         }
//     })
//     res.json(cambio)
// })

export default router

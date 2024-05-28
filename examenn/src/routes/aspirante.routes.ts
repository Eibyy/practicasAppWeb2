import {PrismaClient} from "@prisma/client"
import { Router } from "express";

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (req, res)=>{
    const aspirantes = await prisma.aspirante.findMany()
    res.json(aspirantes)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    const aspirante = await prisma.aspirante.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    res.json(aspirante)
})

router.post('/',async (req, res) =>{
    const{nombre, identificacion, estado, entornoId} = req.body
    const nuevo_aspirante = await prisma.aspirante.create({
        data:{
            nombre,
            identificacion,
            estado,
            entornoId
        }
    })
    res.json({"Servidor": "Se ha agregado el nuevo curso" , "aspirante" : nuevo_aspirante})
})

router.put('/:id',async (req, res) =>{
    const id = parseInt(req.params.id)
    const {estado} = req.body
    const aspirante = await prisma.aspirante.update({
        where:{id:id},
        data:{
            estado: estado
        }
    })
    res.json(aspirante)
})

export default router



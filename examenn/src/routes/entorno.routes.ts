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





export default router

import {PrismaClient} from "@prisma/client"
import { Router } from "express";

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (req, res)=>{
    const cursos = await prisma.curso.findMany()
    res.json(cursos)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    const curso = await prisma.curso.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    res.json(curso)
})

router.post('/',async (req, res) =>{
    const{descripcion, fecha_de_inicio, estado, entornoId} = req.body
    const nuevo_curso = await prisma.curso.create({
        data:{
            descripcion,
            fecha_de_inicio,
            estado,
            entornoId
        }
    })
    res.json({"Servidor": "Se ha agregado el nuevo curso" , "curso" : nuevo_curso})
})

router.put('/:id',async (req, res) =>{
    const id = parseInt(req.params.id)
    const {estado} = req.body
    const curso = await prisma.curso.update({
        where:{id:id},
        data:{
            estado: estado
        }
    })
    res.json(curso)
})


router.put('/:name/:id_entidad/:id_entorno',async (req, res) =>{
    const name = req.params.name
    const id_entidad = parseInt(req.params.id_entidad)
    const id_entorno = parseInt(req.params.id_entorno)
    const entorno = parseInt(req.body.entorno)
    const cambio = await prisma.curso.update({
        where:{id:id_entidad, descripcion: name, entornoId: id_entorno},
        data:{
            entornoId: entorno
        }
    })
    res.json(cambio)
})

export default router

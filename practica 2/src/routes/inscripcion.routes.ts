import {PrismaClient} from "@prisma/client"
import {Router} from "express"
import { json } from "stream/consumers"

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (req, res)=>{
    const inscripciones = prisma.inscripcion.findMany()
    res.json(inscripciones)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    const inscripcion = await prisma.inscripcion.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    res.json(inscripcion)
})

router.post('/',async (req, res) =>{
    const{fecha, hora, valor_cancelado, cursoId, aspiranteId, estado, entornoId} = req.body
    const nueva_inscripcion = await prisma.inscripcion.create({
        data:{
            fecha,
            hora,
            valor_cancelado,
            cursoId,
            aspiranteId,
            estado,
            entornoId
        }
    })
    res.json({"Servidor": "Se ha agregado la nueva inscripcion" , "inscripcion" : nueva_inscripcion})
})

router.put('/:id',async (req, res) =>{
    const id = parseInt(req.params.id)
    const {estado} = req.body
    const inscripcion = await prisma.inscripcion.update({
        where:{id:id},
        data:{
            estado: estado
        }
    })
    res.json(inscripcion)
})

export default router

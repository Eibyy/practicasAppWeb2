import express from "express"
import {aspiranteRoute, cursoRoute, inscripcionRoute, entornoRoute, generalRoute  } from "./routes";
import actualizar from "./actualizar";

const app = express()
const port = 3000

app.use(express.json())
app.use('/curso', cursoRoute)
app.use('/aspirante', aspiranteRoute)
app.use('/inscripcion', inscripcionRoute)
app.use('/entorno', entornoRoute)
app.use('/general', generalRoute)



app.listen(port, () => {
    console.log("Conectado al puerto: ", port)
})


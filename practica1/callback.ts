export function buscarPorID(elementos, id:number, callback){
    const encontrado = elementos.find((e)=>e.id===id)

    if(encontrado){
        callback(null, encontrado)
    }
    else{
        callback("No se encontro ningun objeto con el ID proporcionado", null)
    }
}

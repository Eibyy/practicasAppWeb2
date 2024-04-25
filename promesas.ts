
export async function usarREST(): Promise<void>{
    return new Promise(async (resolve, reject)=>{
        try {
            const datos = await fetch('https://api.restful-api.dev/objects');
            const data = await datos.json();
            console.log(data);  
            resolve()
        }catch (error) {
            console.error('Error al consumir el servicio:', error);
            reject(error)
        }
})
}
usarREST();


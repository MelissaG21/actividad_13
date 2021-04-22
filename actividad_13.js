const comprarCasco = new Promise((resolve, reject)=>{
    setTimeout(() =>{
    resolve("Comprar Casco")
    }, 1000)
})
const comprarGuantes = new Promise((resolve, reject)=>{
    setTimeout(() =>{
    resolve("Comprar Guantes")
    }, 2000)
})

const paseo = new Promise((resolve, reject)=>{
    setTimeout(() =>{
    resolve("Pasear")
    }, 8000)
})

const salirBici = () => {
    comprarCasco
        .then(infoCasco =>{
            console.log(infoCasco)
            return comprarGuantes;
        })
        .then(infoGuantes => {
            console.log(infoGuantes)
            return paseo;
        })
        .then(infoPaseo => {
            console.log(infoPaseo)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(()=> console.log("Proceso finalizado"))
}

salirBici();
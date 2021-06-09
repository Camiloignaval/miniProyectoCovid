
const getTotal = async () => {
    let response = await fetch('http://localhost:3000/api/total');
    let { data } = await response.json()
    // console.log(data)
    return data
}





let funcionPrincipal = async () => {
    let datos = await getTotal()
    let datosFiltrados = datos.filter(dato => dato.active > 10000)
    console.log(datosFiltrados)
}

funcionPrincipal()
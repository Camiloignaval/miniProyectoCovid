import graficoChile from "./graficoChile.js";
import { postData, getData } from "./post_get.js";
// import graficoChile from "./graficoChile.js";

(async () => {
    let jwt = localStorage.getItem('jsToken')
    const confirmados = await getData(jwt, 'http://localhost:3000/api/confirmed');
    const muertos = await getData(jwt, 'http://localhost:3000/api/deaths');
    const recuperados = await getData(jwt, 'http://localhost:3000/api/recovered');
    // console.log(datos)
    graficoChile(confirmados, muertos, recuperados)



})();

document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear();
    // location.reload();

})
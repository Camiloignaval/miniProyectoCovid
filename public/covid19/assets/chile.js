import graficoChile from "./graficoChile.js";
import { getData } from "./post_get.js";
import logout from "./logout.js";

logout();

(async () => {
    let jwt = localStorage.getItem('jsToken')
    const confirmados = await getData(jwt, 'http://localhost:3000/api/confirmed');
    const muertos = await getData(jwt, 'http://localhost:3000/api/deaths');
    const recuperados = await getData(jwt, 'http://localhost:3000/api/recovered');
    graficoChile(confirmados, muertos, recuperados)
})();

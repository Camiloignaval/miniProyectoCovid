import { postData } from "./post_get.js";
import visibilidad from "./visibilidad.js";

const login = () => {
    document.getElementById('formLogin').addEventListener('submit', async (event) => {
        event.preventDefault()
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPass').value;
        let JWT = await postData(email, password);
        // console.log(JWT);
        if (JWT) {
            visibilidad()
            $("#modalLogin").modal('hide');
        }
        else {
            document.getElementById('mensajeLogin').innerHTML = 'Credenciales incorrectas'
        }
    })

}



export default login;
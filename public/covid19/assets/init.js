import visibilidad from "./visibilidad.js";


const init = async () => {
    const token = localStorage.getItem('jsToken')
    if (token) {
        visibilidad()
    }
}

export default init;
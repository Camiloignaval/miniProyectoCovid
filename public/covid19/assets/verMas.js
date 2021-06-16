import rellenoModal from "./rellenoModal.js";


const verMas = () => {
    let arrayBtns = document.querySelectorAll('.verMas');
    arrayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let pais = btn.id.slice(3)
            rellenoModal(pais)
        })
    });
}

export default verMas;
const etiquetaParrafo = document.getElementById("parrafo")
const etiquetaHero = document.getElementById("hero")


let texto = "Bievenidos!!!"
let contador = 0

setInterval(() =>{
    if(texto.length > contador){
        etiquetaParrafo.innerText += texto[contador]
        contador += 1
    }else{
        etiquetaParrafo.innerText = ""
        contador = 0
    }
}, 300)

const fondos = ["hero1.jpg", "hero2.jpg","hero3.jpg","hero4.jpg","hero5.jpg","hero6.jpg","hero7.jpg","hero8.jpg"]

function cambiarFondo(arr){
    const random = Math.floor(Math.random() * arr.length)
    etiquetaHero.style.backgroundImage = `url(./img/${arr[random]})`
}

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    cambiarFondo(fondos)
})

const form = document.getElementById("formulario")

const boton = document.getElementById("botonModo")

boton.addEventListener("click", () => {
    form.classList.toggle("modo-oscuro")
    if(form.classList.contains("modo-oscuro")){
        boton.value = "Modo claro"
    }else{
        boton.value = "Modo oscuro"
    }
})


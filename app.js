//[]
const d = document;
const textArea =d.querySelector(".form__input") 
const imagenMuneco = d.querySelector(".result__img");
const loaderBarra = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text")
const botonEncriptar = d.querySelector(".form__btn");
const botonDesenncriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];
//Funcion encriptar
function ecriptarmensaje(mensaje) {
    let mensajeEncriptado = "";  
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];  // Toma la letra actual
        let encriptada = letra;  // Inicialmente, la letra encriptada es igual a la letra original
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {  
                encriptada = llaves[j][1];  // Reemplaza la letra por su equivalente encriptado
                break;  // Termina el bucle cuando se encuentra la correspondencia
    }
        }
        mensajeEncriptado += encriptada;  // Agrega la letra encriptada al mensaje final
    }

    return mensajeEncriptado;  // Devuelve el mensaje encriptado
}
//Funcion desenciptar 
function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0])
    }
    return mensajeDesencriptado;
}
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderBarra.classList.remove("hidden");
    resultadoTitulo.textContent= "capturando mensaje";
    resultadoText.textContent="";
})
// funcion boton de encriptar
botonEncriptar.addEventListener("click",(e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = ecriptarmensaje(mensaje);
    resultadoText.textContent=mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent= "el mensaje es:";
})

botonDesenncriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent= "el mensaje es:";
    botonCopiar.classList.remove("hidden");
})

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        loaderBarra.classList.add("hidden");
        resultadoTitulo.textContent = "el texto esta copiado"
        botonCopiar.classList.add ("hidden");
        resultadoText.textContent = ""
    })
})
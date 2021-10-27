document.getElementById("inputs").style.display = "none"
document.getElementById("btn-volverCalcular").style.display = "none"
let edad, estatura, peso, sexo;
let btnFem = document.getElementById('btn-fem')
let btnMas = document.getElementById('btn-mas')
let btnCalcula = document.getElementById('btn-calcular')
let btnVolverCalcula = document.getElementById('btn-volverCalcular')
let valorResul = document.getElementById('resultados')

function funSubmit(event) {
    event.preventDefault();
}

btnFem.addEventListener('click', muestraFem)
btnMas.addEventListener('click', muestraMas)
btnCalcula.addEventListener('click', calcularImc)
btnVolverCalcula.addEventListener('click', calcularImc)

function calcularImc() {
    alert("calculando IMC")
    capturarDatos()
    mostrarResultados()
    document.getElementById("btn-calcular").style.display = "none"
}
function mostrarResultados(){
    let edad = localStorage.getItem('Edad')
    let sexo = localStorage.getItem('Genero')
    let estatura = localStorage.getItem('Estatura')
    let peso = localStorage.getItem('Peso')
    let resultado = localStorage.getItem('Res')
    let textResul = "";
    if(resultado < 18.5){
        textResul="Usted se encuentra por debajo de su peso";
    }else if(resultado>=18.5 && resultado<=24.9){
        textResul="Usted se encuentra en peso saludable";
    }else if(resultado>24.9 && resultado<=29.9){
        textResul="Usted se encuentra con sobre peso";
    }else if(resultado>29.9 && resultado<40){
        textResul="Usted se encuentra en estado obeso";
    }else if(resultado>40){
        textResul="Usted se encuentra en obesidad de alto riesgo";
    }
    valorResul.innerHTML = `
    <h2>Su indice de masa corporal es</h2>
    <h1>${resultado}</h1>
    <h4>${textResul}</h4>
    `
    document.getElementById("btn-volverCalcular").style.display = "block"
}

function capturarDatos() {
    alert("Guardadndo datos")
    edad = document.getElementById('inpEdad').value;
    estatura = document.getElementById('inpEstatura').value;
    peso = document.getElementById('inpPeso').value;
    calcularDatoImc()
}

function guardarDatosLocal(edad, estatura, peso, res) {
    localStorage.setItem('Edad', edad)
    localStorage.setItem('Estatura', estatura)
    localStorage.setItem('Peso', peso)
    localStorage.setItem('Res', res)
    localStorage.setItem('Genero', sexo)
}

function calcularDatoImc() {
    alert("Calculando el IMC")
    let res = peso / (estatura * estatura);
    res = res.toFixed(2)
    guardarDatosLocal(edad, estatura, peso, res, sexo)
    console.log(edad, estatura, peso, res, sexo);
}

function muestraFem() {
    alert("Calculando Femenino")
    sexo = "Femenino";
    document.getElementById("inputs").style.display = "block"
}

function muestraMas() {
    alert("Calculando Masculino")
    sexo = "Masculino";
    document.getElementById("inputs").style.display = "block"
}

import {
    iconos
} from './dataIcons.js'
const icono = document.querySelector('#icons')
cargarIconos(iconos);

function cargarIconos(iconos) {
    iconos.forEach(item => {
        const iconItem = document.createElement('a')
        iconItem.innerHTML = `
            <a class="navbar-brand" href="${item.url}">
                <img src="${item.image}" alt="" width="50" height="24" class="d-inline-block align-text-top">
            </a>
            `
        icono.appendChild(iconItem);
    });
}
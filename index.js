
const displayValorSuperior = document.getElementById('valor-ingresado');
const displayValorInferior = document.getElementById('valor-actual');
const botonesDeNumeros = document.querySelectorAll('.numero');
const botonesDeOperador = document.querySelectorAll('.operador');
const display = new Display(displayValorSuperior, displayValorInferior)
const input = document.querySelector("input");
const body = document.querySelector("body");
const calculadora = document.querySelector('.calculadora')
const pantalla= document.querySelector('.display')

botonesDeNumeros.forEach(boton => {
    boton.addEventListener('click' , () => display.agregarNumero(boton.innerHTML));
    
});

botonesDeOperador.forEach(boton => {
    boton.addEventListener('click', () => display.hacerComputo(boton.value))
})



const toggleThemeMode = () => {
  body.classList.toggle("dark");
  calculadora.classList.toggle("dark")
  pantalla.classList.toggle("dark")
};

input.onchange = toggleThemeMode;

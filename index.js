class Calculadora {
    sumar(a,b){
        return a+b;
    }
    restar(a,b){
        return a-b;
    }
    multiplicar(a,b){
        return a*b;
    }
    dividir(a,b){
        return a/b;
    }
    raizCuadrada(a){
        return Math.sqrt(a);
    }
    potencia(a,b){
        Math.pow(a,b);
    }

}

class Display {
constructor(displayValorIngresado,displayValorActual){
    this.displayValorIngresado = displayValorIngresado;
    this.displayValorActual = displayValorActual;
    this.calucadora = new Calculadora();
    this.valorActual= '';
    this.valoringresado ='';
}


imprimirNumero(){

    this.displayValorActual.textContent = this.valorActual;
    console.log(this.valorActual)
    this.displayValorIngresado.textContent = this.valoringresado;
};

agregarNumero(numero){

    this.valorActual = numero;
    this.imprimirNumero();

};

}

const displayValorIngreso = document.getElementById('valor-ingresado');
const displayValorActual = document.getElementById('valor-actual');
const botonesDeNumeros = document.querySelectorAll('.numero');
const botonesDeOperador = document.querySelectorAll('.operador');
const display = new Display (displayValorIngreso,displayValorActual);

botonesDeNumeros.forEach(boton => {
    boton.addEventListener('click' , () => display.agregarNumero(boton.innerHTML));
    
});


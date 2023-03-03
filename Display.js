
 class Display {
    constructor(displayValorSuperior,displayValorInferior){
        this.displayValorSuperior = displayValorSuperior;
        this.displayValorInferior = displayValorInferior;
        this.calculadora= new Calculadora();
        this.valorInferior = '';
        this.valorSuperior ='';
        this.operador= undefined;
        this.signos ={
            sumar:'+',
            restar:'-',
            multiplicar: 'x',
            dividir: '÷',
            potencia: '^',
            raizCuadrada: '√'
        }
    }

    borrarDeAUno(){
        this.valorInferior = this.valorInferior.slice(0,-1);
        this.imprimirNumero();
    }
    limpiarPantalla(){
        this.valorInferior = '';
        this.valorSuperior= '';
        this.operador = undefined;
        this.imprimirNumero()
    }
    
    imprimirNumero(){
         
        this.displayValorInferior.textContent = this.valorInferior;
        this.displayValorSuperior.textContent =  `${this.valorSuperior} ${this.signos[this.operador] || ''}`;
    };
    
    agregarNumero(numero){
        if (numero == '.' && this.valorInferior.includes('.'))return
        this.valorInferior = this.valorInferior.toString() + numero.toString();
        this.imprimirNumero();
    
    };
    
    calcular() {
        const valorSuperior = parseFloat(this.valorSuperior);
        const valorInferior = parseFloat(this.valorInferior);
       if(isNaN(valorSuperior) || isNaN(valorInferior)) return
        
        this.valorInferior = this.calculadora[this.operador](valorSuperior,valorInferior).toString();
           
      
    }
    

    hacerComputo(operando){
        if( this.operador != 'igual') {
            this.calcular();
        }      
        this.operador = operando;
        this.valorSuperior = this.valorInferior || this.valorSuperior;
        this.valorInferior ='';
        this.imprimirNumero();
    }
    
    }

   
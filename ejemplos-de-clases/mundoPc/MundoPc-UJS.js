class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, TipoEentrada: ${this._tipoEntrada} Marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [IdTeclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }

}

class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }

    set tamano(tamano){
        this._tamano = tamano;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamano: ${this._tamano}]`;
    }
}

class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get Monitor(){
        return this._monitor;
    }

    set Monitor(monitor){
        this._monitor = monitor;
    }

    get Teclado(){
        return this._teclado;
    }

    set Teclado(teclado){
        this._teclado = teclado;
    }

    get Raton(){
        return this._raton;
    }

    set Raton(raton){
        this._raton = raton;
    }

    toString (){
        return `idComputadora ${this._idComputadora}, Nombre: ${this._nombre}, 
        ${this._monitor}, 
        ${this._teclado},
        ${this._raton}`;
    }
}

class Orden {

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }

}

//Prueba clase raton
let raton1 = new Raton("USB", "HP");
console.log(raton1.toString());
let raton2 = new Raton("Blueeto", "Del");
console.log(raton2.toString());

//prueba clase teclado
let teclado1 = new Teclado("Blueetoth", "Asu");
let teclado2 = new Teclado("USB", "msi");
console.log(teclado1.toString());
console.log(teclado2.toString());

//Prueba clase monitor
let monitor1 = new Monitor("HP", 15);
let monitor2 = new Monitor("Dell", 27);
console.log(monitor1.toString());
console.log(monitor2.toString());

//Prueba clase computadora
let computadora1 = new Computadora("HP", monitor1, teclado1, raton1);
console.log(computadora1.toString());
let computadora2 = new Computadora("Armada", monitor2, teclado2, raton2);
console.log(computadora2.toString());


//Orden
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden()

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden()

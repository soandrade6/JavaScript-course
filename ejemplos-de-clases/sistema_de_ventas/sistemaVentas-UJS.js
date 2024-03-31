class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }
    
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._produtos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._produtos.length < Orden.MAX_PRODUCTOS){
            this._produtos.push(producto);
        }else {
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._produtos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = '';
        for (let producto of this._produtos){
            productoOrden += ' {' + producto.toString() + '} ';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()} Productos: ${productoOrden}`);
    }
}


// Prueba de clase Producto
let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 100);
console.log(producto1.toString())
console.log(producto2.toString())
 
//Prueba de clase Order
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden()

let producto3 = new Producto("Falsa", 350);
let producto4 = new Producto("Jean", 540);
let producto5 = new Producto("Blusa", 500);
let producto6 = new Producto("Blusa", 600);

orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);


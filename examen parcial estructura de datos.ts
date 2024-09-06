class Producto {
    codigo: string;
    nombre: string;
    precioCosto: number;
    precioVenta: number;

    constructor(codigo: string, nombre: string, precioCosto: number, precioVenta: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precioCosto = precioCosto;
        this.precioVenta = precioVenta;
    }
}

class TablaHash {
    private tabla: { [codigo: string]: Producto } = {};
    private maxProductos: number = 10;

    insertar(producto: Producto): void {
        if (Object.keys(this.tabla).length >= this.maxProductos) {
            console.log("No se pueden insertar más productos. Límite alcanzado.");
            return;
        }

        if (this.tabla[producto.codigo]) {
            console.log(`El producto con código ${producto.codigo} ya existe.`);
            return;
        }

        this.tabla[producto.codigo] = producto;
        console.log(`Producto insertado: ${producto.nombre} (Código: ${producto.codigo})`);
    }

    buscar(codigo: string): Producto | null {
        const producto = this.tabla[codigo];
        if (producto) {
            console.log(`Producto encontrado: ${producto.nombre}, Precio de venta: ${producto.precioVenta}`);
            return producto;
        } else {
            console.log(`Producto con código ${codigo} no encontrado.`);
            return null;
        }
    }

    eliminar(codigo: string): boolean {
        if (this.tabla[codigo]) {
            delete this.tabla[codigo];
            console.log(`Producto con código ${codigo} eliminado correctamente.`);
            return true;
        } else {
            console.log(`No se pudo eliminar. Producto con código ${codigo} no encontrado.`);
            return false;
        }
    }

    mostrarProductos(): void {
        console.log("Productos en la tabla hash:");
        for (const codigo in this.tabla) {
            const producto = this.tabla[codigo];
            console.log(`Código: ${producto.codigo}, Nombre: ${producto.nombre}, Precio Costo: ${producto.precioCosto}, Precio Venta: ${producto.precioVenta}`);
        }
    }
}

// Ejemplo de uso
const farmacia = new TablaHash();

// Insertar productos
const productos = [
    new Producto("P001", "Pepto-Bismol", 50.00, 65.00),
    new Producto("P002", "Ibuprofeno", 30.00, 40.00),
    new Producto("P003", "Paracetamol", 20.00, 30.00),
    new Producto("P004", "Antihistamínico", 45.00, 60.00),
    new Producto("P005", "Jarabe para la tos", 25.00, 35.00),
    new Producto("P006", "Crema para quemaduras", 15.00, 20.00),
    new Producto("P007", "Vitaminas", 10.00, 15.00),
    new Producto("P008", "Antibiótico", 100.00, 120.00),
    new Producto("P009", "Gotas para los ojos", 12.00, 18.00),
    new Producto("P010", "Analgesico", 20.00, 25.00),
];

// Insertar los productos en la tabla hash
productos.forEach(producto => farmacia.insertar(producto));

// Mostrar todos los productos
farmacia.mostrarProductos();

// Buscar un producto
farmacia.buscar("P001");

// Eliminar un producto
farmacia.eliminar("P001");

// Intentar eliminar un producto que no existe
farmacia.eliminar("P011");

// Mostrar todos los productos después de la eliminación
farmacia.mostrarProductos();
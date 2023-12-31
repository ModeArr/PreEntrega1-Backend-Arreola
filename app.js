class ProductManager {
    constructor() {
        this.productos = []
    }

    getProducts() {
        return this.productos
    }

    addProduct(title, description, price, thumbnail, code, stock) {
/*         if (!(stock>0) || !Number.isNaN(stock)) {
            console.log('Ingresa un numero mayor a cero')
            return ''
        } */

        const producto = {
            title,
            description,
            price,
            thumbnail,
            stock,
            code
        }


        if (this.productos.lenght === 0) {
            producto.id = 1;
          } else {
            producto.id = this.productos.length + 1;
          }

        this.productos.push(producto)
        console.log("Se agrego el producto exitosamente")
    }

    getProductById(id) {
        const productIndex = this.productos.findIndex((e) => e.id === id);
        if (!productIndex) {
          console.log("Producto no encontrado");
          return;
        } else {
            return this.productos[productIndex]
        }
    }
}

const frutas = new ProductManager()
frutas.addProduct('Manzana', 'Manzana Red Delicious del Valle', 99, 'manzana.jpg','13235435', 100)
frutas.addProduct('Pera', 'Pera Williams de temporada', 80, 'pera.jpg', '123456', 80000)
frutas.addProduct('Narnaja', 'Jugosa naranja de Barretal', 40, 'naranja.jpg', '123123', 70000)
console.log(frutas.getProducts())
class ProductManager {
    constructor() {
        this.productos = []
    }

    getProducts() {
        return this.productos
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title.trim()){
            console.log('Ingresa un titulo de producto correcto')
            return ''
        }

        if (!description.trim()){
            console.log('Ingresa una descripcion de producto correcto')
            return ''
        }

        if (!(price>0) || Number.isNaN(price)){
            console.log('Ingresa un numero de precio correcto')
            return ''
        }

        if (!thumbnail.trim()){
            console.log('Ingresa un thumbnail de producto correcto')
            return ''
        }

        if (!code.trim()){
            console.log('Ingresa un codigo de producto correcto')
            return ''
        }

        let codeDuplicated = this.productos.find(e => e.code === code)
        if (codeDuplicated){
            console.log('el codigo esta duplicado')
            return ''
        }
        
        if (!(stock>0) || Number.isNaN(stock)) {
            console.log('Ingresa un numero mayor a cero para el stock')
            return ''
        }

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
        const pruduct = this.productos.find(e => e.id === id)
        if (!pruduct) {
          console.log("Producto no encontrado");
          return '';
        } else {
            let index = this.productos.indexOf(pruduct);
            return this.productos[index]
        }
    }
}

const frutas = new ProductManager()
console.log(frutas.getProducts())
frutas.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen','13235435', 25)
console.log(frutas.getProducts())
frutas.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen','13235435', 25)
console.log(frutas.getProductById(1))
console.log(frutas.getProductById(2))
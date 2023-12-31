#### Nombre: Modesto Arreola

#### Institucion: Coderhouse

#### Curso: Back End

#### Comision: 50040

#### Profesor: Rabindranath Ferreira Villamizar

#### Tutor: Tomás Alessandro Yovino

#### Entrega Numero: 1

#### EL proyecto pide que se haga una clase que gestione productos asi como su agregacion y recibimiento, la clase permite guardar esto productos en un array constructor permitiendo. Se agregan al ejercicio paradigmas de validacion de datos con diferentes fuinciones internas de javascript para su compresion como FIND, FINDINDEX, entre otros para escoger y entender conceptos de manejo de objetos, datos y su manipulacion.

---

## Cosas a realizar

### getProducts()
#### Esta funcion permite traer todo los objetos del array productos

### addProduct()
#### Esta funcion permite agregar un producto al array productos mediante una serie de parametros(title, description, price, thumbnail, code, stock), se tiene que validar que cada uno se ingrese correctamente. Para esto se realizo una condicional por paramentro para verificar que esta no este vacia y se su tipo de dato. Asì tambine se agrego un incrementador de id para poder guardarlos con un id para su identifiacion. En una de las verificaciones del code se uso FIND para poder verficiar que no se este repitiendo en ningun producto el code.

### getProductById(id)
#### Esta funcion permite encontrar un producto por su id, para esto se uso un simple FIND para encontrar el producto que tiene el id buscado y luego un FINDINDEX para el contar la posicion de ese producto en el array y poder regresarlo.



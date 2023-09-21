import productos from "../productos.js";

const productosAcumulados = new productos();

// al apretar el boton guarda los productos xd 
document.getElementById('guardarProducto').addEventListener('click', () => {
    const nombreProducto = productosAcumulados.nombreProducto.value;
    const precioProducto = parseFloat(productosAcumulados.precioProducto.value);
    const nombreComercio = productosAcumulados.nombreComercio.value;

    productosAcumulados.listaProductos.push({ nombre: nombreProducto, precio: precioProducto, comercio: nombreComercio });

    // Limpia los campos después de agregar el producto epico me salio dea
    productosAcumulados.nombreProducto.value = '';
    productosAcumulados.precioProducto.value = '';
    productosAcumulados.nombreComercio.value = '';

    console.log(nombreProducto, precioProducto, nombreComercio);
});

document.getElementById('listarProductos').addEventListener('click', () => {

    if (productosAcumulados.listaProductos.length == 0) {
        alert("NO HAY PRODUCTOS CARGADOS");
    } else {
        const listaProductos = document.getElementById('listaProductos');

        // Limpia cualquier contenido previo en listaProductos
        listaProductos.innerHTML = '';

        // Itera sobre cada producto en el arreglo listaProductos y crea elementos <lu> para mostrarlos noo amigo salio piola
        // flipoo tio 
        productosAcumulados.listaProductos.forEach((producto) => {
            const listItem = document.createElement('ul');
            listItem.textContent = `Nombre: ${producto.nombre}, Precio: ${producto.precio}, Comercio: ${producto.comercio}`;
            listaProductos.appendChild(listItem);
        });
    }
});

document.getElementById('compararPrecios').addEventListener('click', () => {

    if (productosAcumulados.listaProductos.length == 0) {
        alert("NO HAY PRODUCTOS CARGADOS");
    } else {
        const pBaratos = document.getElementById('pBaratos');
        pBaratos.innerHTML = '';

        let productosMasBaratos = []; //lista que va a guardar los mas baratos
        const productosBaratos = productosAcumulados.listaProductos;    //obtenemos la lista de todos los productos

        /*
            utilizamos 2 bucles que van a iterar por la misma lista, el bucle i se encarga 
            de obtener el primer producto para asi poder comparar, 
            y el bucle j se encarga de ir haciendo comparacion por comparacion de cada precio 
            de los productos
        */
        for (let i = 0; i < productosBaratos.length; i++) {
            let auxiliar = productosBaratos[i]; //obtenemos el primer producto de la lista
            let encontro = false;
            for (let j = i + 1; j < productosBaratos.length; j++) { //inicia en i+1 asi no toma la misma posicion que auxiliar
                if (auxiliar.nombre == productosBaratos[j].nombre) {  //comparamos nombres       
                    /*
                        condicion para comparar que producto es mas barato, el mas barato
                        se guarda en la lista de los productos mas baratos
                    */
                    encontro = true;
                    if (auxiliar.precio < productosBaratos[j].precio) {
                        productosMasBaratos.push(auxiliar);
                        mostrarProducto(auxiliar, pBaratos);
                    } else {
                        productosMasBaratos.push(productosBaratos[j]);
                        mostrarProducto(productosBaratos[j], pBaratos);

                    }
                }
            }

        }
        console.log(productosMasBaratos);
    }
});

function mostrarProducto(pro, pBaratos) {
    const listItem = document.createElement('ul');
    listItem.textContent = `Nombre: ${pro.nombre}, Precio: ${pro.precio}, Comercio: ${pro.comercio}`;
    pBaratos.appendChild(listItem);
}


import productos from "../productos.js";

const productosAcumulados = new productos();

// al apretar el boton guarda los productos xd 
document.getElementById('guardarProducto').addEventListener('click', () => {
    const nombreProducto = productosAcumulados.nombreProducto.value;
    const precioProducto = parseFloat(productosAcumulados.precioProducto.value);
    const nombreComercio = productosAcumulados.nombreComercio.value;

    /*Condicional para obligar al usuario a completar un campo especifico */
    if (nombreProducto !== '') {
        productosAcumulados.listaProductos.push({ nombre: nombreProducto, precio: precioProducto, comercio: nombreComercio });
    

    // Limpia los campos después de agregar el producto epico me salio dea
    productosAcumulados.nombreProducto.value = '';
    productosAcumulados.precioProducto.value = '';
    productosAcumulados.nombreComercio.value = '';

    console.log(nombreProducto, precioProducto, nombreComercio);
    } else {
        console.log('Completa el campo "Nombre del Producto"');
    }
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
    if (productosAcumulados.listaProductos.length === 0) {
        alert("NO HAY PRODUCTOS CARGADOS");
        return; // Salir de la función si no hay productos cargados
    }

    const pBaratos = document.getElementById('pBaratos');
    pBaratos.innerHTML = '';

    const productosBaratos = {}; // Usar un objeto para rastrear los productos más baratos

    // Recorremos la lista de productos
    productosAcumulados.listaProductos.forEach(producto => {
        const nombre = producto.nombre;
        const precio = producto.precio;

        // Comprobamos si ya tenemos un producto registrado con el mismo nombre
        if (nombre in productosBaratos) {
            // Si el precio es menor que el precio registrado, actualizamos la información
            if (precio < productosBaratos[nombre].precio) {
                productosBaratos[nombre] = { precio, producto };
            }
        } else {
            // Si el nombre no está en productosBaratos, lo añadimos
            productosBaratos[nombre] = { precio, producto };
        }
    });

    // Mostramos los productos más baratos
    Object.values(productosBaratos).forEach(({ producto }) => {
        mostrarProducto(producto, pBaratos);
    });

    console.log(Object.values(productosBaratos).map(({ producto }) => producto)); // Mostramos los productos más baratos en la consola
});


function mostrarProducto(pro, pBaratos) {
    const listItem = document.createElement('ul');
    listItem.textContent = `Nombre: ${pro.nombre}, Precio: ${pro.precio}, Comercio: ${pro.comercio}`;
    pBaratos.appendChild(listItem);
}


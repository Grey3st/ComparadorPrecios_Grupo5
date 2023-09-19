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

    console.log(nombreProducto,precioProducto,nombreComercio);
});
document.getElementById('listarProductos').addEventListener('click', () => {
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
});

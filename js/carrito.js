

// Agregar producto al carrito
function agregarProducto(event){
    var producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    actualizarCarrito();
};

//Eliminar producto del carrito
function eliminarProducto(idProducto) {

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(function (producto) {
        return producto.id !== idProducto;
    });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
};

// vaciar completamente el carrito
document.getElementById('vaciar-carrito')
.addEventListener('click',function() {
    localStorage.removeItem('carrito');
    actualizarCarrito();
});

//Esta función toma el carritode LocalStorage, lo recorre,y vuelve a construir la lista de productos en el HTML
function actualizarCarrito() {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML='';

    for (let i=0; i < carrito.length; i++) {
        var producto = carrito[i];
        var li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);
    }

};

// Para pruebas, puedes agregar productos de esta manera
agregarProducto({ target: { getAttribute: (attr) => { 
    if(attr === 'data-id') return '1';
    if(attr === 'data-nombre') return 'Cuentavueltas de 4 vías con semáforo';
    if(attr === 'data-precio') return '100.000';
 }}});

 
 
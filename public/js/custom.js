var productos = [
    { name: 'Producto1', precio: 25, imagen: 'https://picsum.photos/500/500' },
    { name: 'Producto2', precio: 15, imagen: 'https://picsum.photos/500/500' },
    { name: 'Producto3', precio: 30, imagen: 'https://picsum.photos/500/500' },
    { name: 'Producto4', precio: 30, imagen: 'https://picsum.photos/500/500' }
];
// Función para agregar productos al contenedor
function agregarProductos(data) {
    console.log('agregar productos');
    var productContainer = $('#product-container');

    data.forEach(function(producto) {
        // Crea un nuevo elemento de producto con los datos del arreglo
        var productCard = $('<div class="product-card">');
        var img = $('<img>').attr('src', producto.imagen).attr('alt', producto.name);
        var productInfo = $('<div class="product-info">');
        var productName = $('<div class="product-name">').text(producto.name);
        var productPrice = $('<div class="product-price">').text('$' + producto.precio.toFixed(2));

        // Construye la estructura del producto
        productInfo.append(productName, productPrice);
        productCard.append(img, productInfo);

        // Agrega el producto al contenedor
        productContainer.append(productCard);
    });
}
// Llama a la función para agregar productos cuando el documento esté listo
$(document).ready(function() {
    agregarProductos(productos);
});
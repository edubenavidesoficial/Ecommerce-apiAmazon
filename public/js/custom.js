var productos = [
    { name: 'Producto1', precio: 25, imagen: 'https://picsum.photos/500/500' },
    { name: 'Producto2', precio: 15, imagen: 'https://picsum.photos/500/500' },
    { name: 'Producto3', precio: 30, imagen: 'https://picsum.photos/500/500' }
];
var categorias =[
    { name: 'Categoria 1', imagen: 'uploads/images/21-10-2023/a.jpg' },
    { name: 'Categoria 2', imagen: 'uploads/images/21-10-2023/a.jpg' },
    { name: 'Categoria 3', imagen: 'uploads/images/21-10-2023/a.jpg' },
    { name: 'Categoria 4', imagen: 'uploads/images/21-10-2023/a.jpg' },
    { name: 'Categoria 5', imagen: 'uploads/images/21-10-2023/a.jpg' },
]

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
function agregarCategorias(data) {
    var categoryContainer = $('#category-container');

    data.forEach(function(categoria) {
        // Crea un nuevo elemento de categoría con los datos del arreglo
        var categoryCard = $('<div class="card">');
        var img = $('<img>').attr('src', categoria.imagen).attr('alt', 'Categoría');
        var categoryName = $('<div class="category-name">').text(categoria.name);

        // Construye la estructura de la categoría
        categoryCard.append(img, categoryName);

        // Agrega la categoría al contenedor
        categoryContainer.append(categoryCard);
    });
}

// Llama a la función para agregar productos cuando el documento esté listo
$(document).ready(function() {
    agregarCategorias(categorias) 
    agregarProductos(productos);
});
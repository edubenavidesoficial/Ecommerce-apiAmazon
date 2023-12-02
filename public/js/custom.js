
// Función para agregar productos al contenedor
function agregarProductos(data) {
  var productContainer = $("#product-container");
  data.forEach(function (producto) {
    // Crea un nuevo elemento de producto con los datos del arreglo
    var productCard = $('<div class="product-card">');
    var img = $("<img>")
      .attr("src", producto.imagen)
      .attr("alt", producto.name);
    var productInfo = $('<div class="product-info">');
    var productName = $('<div class="product-name">').text(producto.name);
    var productPrice = $('<div class="product-price">').text(
      "$" + producto.precio.toFixed(2)
    );

    // Construye la estructura del producto
    productInfo.append(productName, productPrice);
    productCard.append(img, productInfo);

    // Agrega el producto al contenedor
    productContainer.append(productCard);

    // Agrega la URL como atributo al elemento de producto
    productCard.attr("href", "http://localhost:8080/producto/" + producto.id);

    // Agrega el evento click al elemento de producto
    productCard.click(function () {
      // Abre la URL en una nueva pestaña o ventana
      window.open(productCard.attr("href"));
    });
  });
}
// Llama a la función para agregar productos cuando el documento esté listo
$(document).ready(function () {
  $.get("/api/productos/", 
  function(response) {
    const productos = response
    agregarProductos(productos);

  })
});


var productos = [
    { id:1,name: 'Producto1', precio: 25, imagen: 'https://picsum.photos/500/500',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.' },
    { id:2,name: 'Producto2', precio: 15, imagen: 'https://picsum.photos/500/500',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.' },
    { id:3,name: 'Producto3', precio: 30, imagen: 'https://picsum.photos/500/500',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.' },
    { id:4,name: 'Producto4', precio: 30, imagen: 'https://picsum.photos/500/500',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.' }
];
$(document).ready(function() {
    $('.sidenav').sidenav();
    detalleProducto(1);
});
function detalleProducto(id){
    const url = window.location.search;

const params = url.split('/');

const productoIndex = params.indexOf('producto');

const productoid = params[productoIndex].substr(8);

console.log(productoid);
    let producto = productos.find(element => element.id==id);
    $('#nombre').html(producto.name);
    $('#precio').html('$'+producto.precio);
    $('#imagen').attr('src',producto.imagen);
    $('#descripcion').html(producto.descripcion);

}
document.addEventListener('DOMContentLoaded',function(event){

  

    libreria.getId('#vista').enrutar()
            .ruta('/','app/views/home.html',null,null)
            .ruta('/producto/tecnologia','app/views/producto.html',null,null)
            .ruta('/carrito','app/views/carrito.html',null,null);

});

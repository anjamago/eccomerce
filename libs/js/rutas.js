document.addEventListener('DOMContentLoaded',function(event){

  if(typeof window.libreria == 'undefined'){
    window.libreria = window._ = inicio();
    window.addEventListener('load',libreria.manejadorRutas,false);
    window.addEventListener('hashchange',libreria.manejadorRutas,false);
  }else{
    console.log('se esta llamdo la libreia ');
  }

    libreria.getId('#vista').enrutar()
            .ruta('/','app/views/home.html',null,null)
            .ruta('/producto/tecnologia','app/views/producto.html',null,null)
            .ruta('/carrito','app/views/carrito.html',null,null);

});

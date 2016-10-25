var id_cart;
document.addEventListener('DOMContentLoaded',function(event){
  (function(window,document){
    var inicio = function(){
      var element = null,
          marco=null,
          rutas={},
          controladores ={},
          controlador,
          libreria={
            getId:function(id){
              element = document.querySelector(id);
              return this;
            },
            noSubmit:function(){
              element.addEventListener('submit',function(e){
                e.preventDefault();
                return this;

              },false);
              return this;
            },
            enrutar:function(){
              marco = element;
              return this;
            },
            ruta:function(ruta, plantilla,controlador){
              rutas[ruta]={
                'plantilla':plantilla,
                'controlador':controlador
              };

              return this;
            },
            manejadorRutas:function(){
              var hash = window.location.hash.substring(1) || '#/';
              var vistaId = hash.split('/');
              vistaId = vistaId[vistaId.length -1];
              var destino = rutas[hash];
              var xhr = new XMLHttpRequest();

              if(destino && destino.plantilla){
                xhr.addEventListener('load',function(){
                    if(hash ==='/'){
                      html_element = '<div class="ui text container"><h1 class="ui inverted header">'
                          +'Imagine-a-Company</h1><h2>Eccomerce Bootcamps</h2>'
                          +'<div class="ui huge primary button">Log in<i class="right arrow icon"></i></div></div>'


                      document.querySelector('#child').innerHTML = html_element;
                    }else{
                      removeClass('#home','segment');
                    }
                      marco.innerHTML = this.responseText;
                      console.log(vistaId);
                      if(vistaId === ''){
                        id_cart = document.querySelector('#'+vistaId);
                      }else{
                        id_cart = document.querySelector('#'+vistaId);
                        vistaId = '';
                      }

                      fr.inisilizeFire().dbConect('productos').getProduct();
                      console.log(obj_product);
                      obj_product.forEach(key,obj){
                        console.log(key);
                        console.log(obj);
                        //crearCard(id_cart,vistaId,data);
                      }

                },false);
                xhr.open('get',destino.plantilla,true);
                xhr.send(null);
              }else{
                window.location.hash='#/';
              }

            }

          };
          return libreria;
    };

    if(typeof window.libreria == 'undefined'){
      window.libreria = window._ = inicio();
      window.addEventListener('load',libreria.manejadorRutas,false);
      window.addEventListener('hashchange',libreria.manejadorRutas,false);
    }else{
      console.log('se esta llamdo la libreia ');
    }
  })(window,document);
});

var obj_product={};
//document.addEventListener('DOMContentLoaded',function(event){
var fireBase = function(){
  return {
     apiKey: "AIzaSyCFH8Fl7WPSlDxf5C7T-KJT7RJMBpStagg",
     authDomain: "inventario-d1349.firebaseapp.com",
     databaseURL: "https://inventario-d1349.firebaseio.com",
     storageBucket: "",
     messagingSenderId: "526808152686",
     fire_base:null,
     result:null,
     inisilizeFire:function(){
       var conexion={
             apiKey: this.apiKey,
             authDomain: this.authDomain,
             databaseURL: this.databaseURL,
             storageBucket: this.storageBucket,
             messagingSenderId: this.messagingSenderId,
       };
       firebase.initializeApp(conexion);
       return this;

     },
     dbConect:function(data){
          this.fire_base = new Firebase("https://inventario-d1349.firebaseio.com");
          this.result = this.fire_base.child(data);
          //return this;
     },
     getAutLogin:function(){

     },
     getProduct:function(){

       this.fire_base.on("child_added", function(snap) {


            snap.forEach(function(childSnapshot) {

                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                obj_product[key]=childData;
                //console.log(id_cart, vistaId);
                crearCard(childData);

            });

        });
     }
   };
};


var fr = fireBase();
console.log(obj_product);
var removeClass =function(id,class_css){
      var element = document.querySelector(id);
      var child = document.querySelector('#child');
      var menu = document.querySelector('#myMenu');
      var menuHome = document.querySelector('#menuHome');

      if(child){
        child.innerHTML='';
      }
      menuHome.classList.add('hidden');
      menu.classList.remove('hidden');
      element.classList.remove(class_css);
      menu.style.display= 'flex !important';

};
//crearCard
var crearCard=function(data){
id_cart = document.querySelector('#'+vistaId);
var data_success={};
var hash = window.location.hash.substring(1);
var vista = hash.split('/');
vista = vistaId[vista.length -1];
console.log(vista);
console.log(data);
  if(data !=='')
  {
      if(data.categoria == vista){
        data_success[data_key]= data[data_key];
      }
    }else {
    data_success = data;
  }
	var element=document.querySelector('#'+vista);
	var element_obj={};
	var span = document.createElement("span");
	var span1 = document.createElement("span");
	var img = document.createElement('img');
  var div_content = document.createElement('div');


	var i=7;
	while(i--){
		element_obj[i]=document.createElement('div');
	}


	element_obj[1].classList.add('card');
	element_obj[2].classList.add('image');
	img.setAttribute('href',data_success.imagenbase64);
	element_obj[2].appenChilder(img);
	element_obj[3].classList.add('content');
  element_obj[4].classList.add('description');
  div_content.classList.add('header');
//insertar contenido nombre de producto
  div_content.innerHTML = data_success.nombre_producto;
  element_obj[3].appenChilder(div_content);
  element_obj[4].innerHTML = "<span>"+data_success.cantidad+"</span><br>"+data_success.descripcion;

  element_obj[3].appenChilder(element_obj[4]);

	element_obj[5].classList.add('extra');
	element_obj[5].classList.add('content');
  span.classList.add('right');
  span.classList.add('floated');
  var i = document.createElement("i");
  i.classList.add('user');
  i.classList.add('icon');
  span1.appenChilder(i);
  span1.innerHTML = data_success.cantidad;
  span.innerHTML = '<button id="carrito">Agregar</button>';
  element_obj[5].appenChilder(span);
  element_obj[5].appenChilder(span1);

//creamos elementos card
element_obj[1].appenChilder(element_obj[2]);
element_obj[1].appenChilder(element_obj[3]);
element_obj[1].appenChilder(element_obj[5]);

//insertamos en el html
element.appenChilder(element_obj[1]);

};
//crear clave unica
var uniqid= function(){
  var n=Math.floor(Math.random()*11);
  var k = Math.floor(Math.random()* 1000000);
  var m = String.fromCharCode(n)+k;
  return m;
};
//carrito de compras

var my_carrito={};
var shop_carrier=function() {
    var product={
      'name':'',
      'quantyti':'',
      'price':'',
      'img':''
    };

    var id= uniqid();
    var i =0;
    while(my_carrito.length > 0){
      if(my_carrito[i] === id){
        id = uniqid();
      }
    }
    my_carrito[id]=product;
};
//});

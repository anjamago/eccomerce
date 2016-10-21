var obj_product={};
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
          return this;
     }
     ,
     getAutLogin:function(){

     },
     getProduct:function(){

       this.fire_base.on("child_added", function(snap) {


            snap.forEach(function(childSnapshot) {

                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                obj_product[key]=childData;

            });
            console.log(obj_product);
        });
     }
   };
};


var fr = fireBase();

fr.inisilizeFire().dbConect('productos').getProduct();

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

var crearCard=function(data){
	var element=document.querySelector('#mis_card');
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
	img.setAttribute('href',data.img);
	element_obj[2].appenChilder(img);
	element_obj[3].classList.add('content');
  element_obj[4].classList.add('description');
  div_content.classList.add('header');
  element_obj[3].appenChilder(div_content);
  element_obj[3].appenChilder(element_obj[4]);

	element_obj[5].classList.add('extra');
	element_obj[5].classList.add('content');
  span.classList.add('right');
  span.classList.add('floated');
  var i = document.createElement('i');
  i.classList.add('user');
  i.classList.add('icon');
  span1.appenChilder(i);
  element_obj[5].appenChilder(span);
  element_obj[5].appenChilder(span1);

//creamos elementos card
element_obj[1].appenChilder(element_obj[2]);
element_obj[1].appenChilder(element_obj[3]);
element_obj[1].appenChilder(element_obj[5]);

//insertamos en el html
element.appenChilder(element_obj[1]);

};

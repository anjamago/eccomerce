document.addEventListener('DOMContentLoaded',function(event){
  (window,document)
    libreria.getId('#vista').enrutar()
            .ruta('/','app/views/home.html',null,null)
            .ruta('/producto/tecnologia','app/views/producto.html',null,null);
  (window,document);
});

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

}

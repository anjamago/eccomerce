        // Initialize Firebase
      var valorCategoria="";
         var completos=true;
         var imagen="";
        var config = {
          apiKey: "AIzaSyCFH8Fl7WPSlDxf5C7T-KJT7RJMBpStagg",
          authDomain: "inventario-d1349.firebaseapp.com",
          databaseURL: "https://inventario-d1349.firebaseio.com",
          storageBucket: "",
          messagingSenderId: "526808152686"
        };
        firebase.initializeApp(config);
        $('.ui.dropdown')
      .dropdown()
      ;
        function miFuncion(){
    completos=validar();
    if(completos){
        var nombre=document.getElementById("nombre").value;
        var cantidad=document.getElementById("cantidad").value;
        var valor=document.getElementById("valor").value;
        var descripcion=document.getElementById("descripcion").value;
         var categoria=document.getElementById("categoria").value;
         var imagenBase64=imagen;
         console.log(imagenBase64);

        var ref = new Firebase("https://inventario-d1349.firebaseio.com/producto");
        ref.push({
        nombre_producto:nombre,
            cantidad:cantidad,
            precio:valor,
            descripcion:descripcion,
            categoria:valorCategoria,
            imagenbase64:imagenBase64

        });
         $('.creacion')
      .modal('show')
    ;

      }
    }
      function seleccionCategoria(combo){

        var indice = combo.selectedIndex;
             valorCategoria = combo.options[combo.selectedIndex].text;
           }


        function validar(){
          completos=true;
           var nom=document.getElementById("nombre").value;
         if (nom===""){

          $('.validacionCampos')
      .modal('show')
    ;
        document.getElementById("nombre").focus();
        completos=false;
          return completos;
                  }

        var cant=document.getElementById("cantidad").value;
      if (cant===""){
    $('.validacionCampos')
      .modal('show')
           document.getElementById("cantidad").focus();
         completos=false;
          return completos;
                  }

           var val=document.getElementById("valor").value;
      if (val===""){
        $('.validacionCampos')
      .modal('show')
           document.getElementById("valor").focus();
          completos=false;
          return completos;
                  }
    var des=document.getElementById("descripcion").value;
      if (des===""){
         $('.validacionCampos')
      .modal('show')
           document.getElementById("descripcion").focus();
          completos=false;
          return completos;
                  }

    var cat=document.getElementById("categoria").value;
      if (cat==""){
         $('.validacionCampos')
      .modal('show')
           document.getElementById("categoria").focus();
          completos=false;
          return completos;
                  }

    var ima=imagen;
      if (ima=="" || ima==undefined){
         $('.validacionCampos')
      .modal('show')
           document.getElementById("inputFileToLoad").focus();
          completos=false;
          return completos;
                  }

                 return completos;
                }

  function encodeImage() {

      var filesSelected = document.getElementById("inputFileToLoad").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64

          var newImage = document.createElement('img');
          newImage.src = srcData;

          document.getElementById("imgTest").innerHTML = newImage.outerHTML;
      imagen=document.getElementById("imgTest").innerHTML;
                     }
        fileReader.readAsDataURL(fileToLoad);
      }
    }
    function validarSiNumero(numero){
   if (!/^([0-9])*$/.test(numero))
     alert("El valor " + numero + " no es un número");
     cantidad="";
 }

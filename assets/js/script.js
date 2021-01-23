$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $( "#enviarCorreo" ).click(function() {
        alert("El correo fue enviado correctamente.");
      });

      $("#ingredientes").dblclick("click",function(){
	    $(this).css("color", "red");
    });

    $("#preparacion").dblclick("click",function(){
	    $(this).css("color", "red");
    });

    $( "#recetas1" ).click(function() {
        $( "p" ).toggle();
      
      });

      $( "#recetas2" ).click(function() {
        $( "p" ).toggle();
      
      });

      $( "#recetas3" ).click(function() {
        $( "p" ).toggle();
      
      });



  })
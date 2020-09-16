$(document).ready(function(){
  // creare evento click sulla cella della tabella
  $(".square").click(
    function() {
      $(".square").addClass("hide");
      $(this).removeClass("hide");

      $.ajax(
        {
        url:https://flynn.boolean.careers/exercises/api/random/int,
        method: "GET",
        success: function (data, stato) {
        $("#risultati").html(data);
        },
        error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }
        }
        );


    }
  );
});

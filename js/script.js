$(document).ready(function(){
  // creare evento click sulla cella della tabella
  $(".square").click(
    function() {
      // nascondo gli tutti gli span al click
      $(".square").addClass("hide");
      // mostro solo lo span del box del click
      $(this).removeClass("hide");




      $.ajax(
        {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
        // stampo nello span il numero che viene generato
          $("span").text(data.response);
        },
        "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }
        }
        );


    }
  );
});

// creare funzione che se il numero e <= 5 il quadrato è giallo se maggiore verde
function stampaNumero(num) {
  if (num <= 5) {
    $(".square").addClass("yellow");
  } else {
    $(".square").addClass("green");
  }
}

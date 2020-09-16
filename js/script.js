$(document).ready(function(){
  // creare evento click sulla cella della tabella
  $(".square").click(
    function() {
      // creare la variabile del quadrato this
      var quadrato = $(this);
      // creare la variabile delloo span di this
      var numPrint = $(this).find("span");

      // chiamata ajax per prendere numero generato do 1 a 9
      $.ajax(
        {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
        // stampo nello span il numero che viene generato
          numPrint.text(data.response);
          // cambio colore se il numero in base alla grandezza del stampaNumero
           stampaNumero(data.response, quadrato);
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
function stampaNumero(num, div) {
  if (num <= 5) {
    $(div).addClass("yellow");
  } else {
    $(div).removeClass("yellow");
    $(div).addClass("green");
  }
}

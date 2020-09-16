$(document).ready(function(){
  // creare evento click sulla cella della tabella
  $(".square").click(
    function() {
      // // nascondo gli tutti gli span al click
      // $(".square").addClass("hide");
      // // mostro solo lo span del box del click
      // $(this).removeClass("hide");
      var quadrato = $(this);

      var numPrint = $(this).find("span");




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

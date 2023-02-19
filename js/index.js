   var player1 = "Player 1";
   var player2 = "Player 2";

   //funcionalidad
   function roll() {
    setTimeout(function() {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      // detenerla rotacion antes de volver a inciar el evento
      document.querySelector(".dieface1").classList.remove("rotate");
      document.querySelector(".dieface2").classList.remove("rotate");
  
      // iniciar la rotacion despues de un delay
      setTimeout(function() {
        document.querySelector(".dieface1").classList.add("rotate");
        document.querySelector(".dieface2").classList.add("rotate");
      }, 300);
  
      // actualizar la cara del dado despues de un delay
      setTimeout(function() {
        document.querySelector(".dieface1").setAttribute("src", "assets/dice" + randomNumber1 + ".png");
        document.querySelector(".dieface2").setAttribute("src", "assets/dice" + randomNumber2 + ".png");
  
        if (randomNumber1 === randomNumber2) {
          document.querySelector("h1").innerHTML = "Empate!";
        } else if (randomNumber1 < randomNumber2) {
          document.querySelector("h1").innerHTML = (player2 + " Fue el ganador!");
        } else {
          document.querySelector("h1").innerHTML = (player1 + " Fue el ganador!");
        }
      }, 500);
    }, 900);
  }
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function myFunction() {
    var x = document.getElementById("menu")

    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
}


document.getElementById("kviz-form").onsubmit = function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the user's answers to the questions
  const answer1 = document.getElementById("kerdes-1").value;
  const answer2 = document.getElementById("kerdes-2").value;
  const answer3 = document.getElementById("kerdes-3").value;

  // Check if the answers are correct
  let correct = 0;
  if (answer1.toLowerCase() === "2014") correct++;
  if (answer2.toLowerCase() === "igen") correct++;
  if (answer3.toLowerCase() === "kutya" ) correct++;

  // If the user answered all questions correctly, display the discounted code
  if (correct === 3) {
    document.getElementById("eredmeny").innerHTML = "Gratulálunk, Ön nyert! Használja a 'MANCSIGIFT' kódot online megrendelésénél és mi ajándékba küldünk egy tasak Mancsi Treats jutalomfalatot! Megjegyzésbe írja meg cicájának vagy kutyájának szeretné adni és a kiskedvence élekorát is. Ha esetleg allergiás vagy más betegsége van vegye fel velünk a kapcsolatot és segítünk! ";

  } else {
    document.getElementById("eredmeny").innerHTML = "Sajnos Ön nem nyert! Próbálkozzon újra holnap!";
  }
}

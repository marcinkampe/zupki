function checkQuiz() {
  let q1 = document.forms.jaka_zupka["q1"].value;
  let q2 = document.forms.jaka_zupka["q2"].value;
  let q3 = document.forms.jaka_zupka["q3"].value;

  if (q1 == "" || q2 == "" || q3 == "") {
    alert("Wypełnij wszytkie pola");
  } else {
    let result = "";
    let zdj = "";

    switch (q1) {
      case "polska":
        switch (q2) {
          case "ostra":
            switch (q3) {
              case "weganskia":
                result = "Pomidorowa";
                zdj = "img/pomidorowa_amino.png";
                break;
              case "miesna":
                result = "Ogonowa wołowa po małopolsku";
                zdj = "img/ogonowa.png";
                break;
            }
            break;
          case "lagodna":
            switch (q3) {
              case "weganskia":
                result = "Ogórkowa";
                zdj = "img/ogorkowa.png";
                break;
              case "miesna":
                result = "Żurek";
                zdj = "img/zurek.png";
                break;
            }
            break;
        }
        break;

      case "azjatycka":
        switch (q2) {
          case "ostra":
            switch (q3) {
              case "weganskia":
                result = "Curry";
                zdj = "img/curry.png";
                break;
              case "miesna":
                result = "oyakata beef wasabi";
                zdj = "img/beef.png";
                break;
            }
            break;
          case "lagodna":
            switch (q3) {
              case "weganskia":
                result = "goong vegan";
                zdj = "img/vegan.png";
                break;
              case "miesna":
                result = "Neoguri seafood & mild";
                zdj = "img/neoguri.png";
                break;
            }
            break;
        }
        break;
    }

    document.getElementById("result").innerHTML =
      "<p class = 'quiz__wynik-nazwa>' style= 'text-align: center; font-size: large; font-weight: bold;'>" +
      result +
      "</p>" +
      "<img src=" +
      zdj +
      " alt='' class='quiz__wynik-zdj'>";
  }
}

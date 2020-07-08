let app = document.getElementById("app");

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

function myFunction(e) {
  if (e.matches === true) {
    $(function () {
      $(".chart").easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        lineCap: "butt",
        barColor: "#1abc9c",
        trackColor: "#ecf0f1",
        size: 160,
        animate: 800,
      });
    });
  } else {
    $(function () {
      $(".chart").easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        lineCap: "butt",
        barColor: "#1abc9c",
        trackColor: "#ecf0f1",
        size: 160,
        animate: 800,
      });
    });
  }
}

let x;
x = window.matchMedia("(max-width:700px)");
window.onresize = function(){
  if(window.innerWidth<=700)
    x = window.matchMedia("(max-width:700px)");
}
myFunction(x);
x.addEventListener("resize",myFunction);

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Hello World!")
  .pauseFor(2000)
  .deleteAll()
  .typeString("I am a <strong>Computer Enthusiast.</strong>")
  .pauseFor(2000)
  .deleteChars(20)
  .typeString("<strong>developer.</strong>")
  .pauseFor(2000)
  .deleteChars(10)
  .typeString("<strong>designer.</strong>")
  .pauseFor(2000)
  .deleteChars(9)
  .typeString("<strong>problem solver.</strong>")
  .pauseFor(2000)
  .start();

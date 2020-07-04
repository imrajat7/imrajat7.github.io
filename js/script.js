let app = document.getElementById("app");

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

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

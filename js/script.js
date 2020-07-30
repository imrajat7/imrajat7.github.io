let app = document.getElementById("app");

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

var typewriter = new Typewriter(app, {
  loop: true,
});

// if(!(/Android|webOS|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
//   $.scrollify({
//         section : ".section",
//         sectionName : "section-name",
//         interstitialSection : "",
//         easing: "easeOutExpo",
//         scrollSpeed: 200,
//         offset : 0,
//         scrollbars: true,
//         standardScrollElements: "",
//         setHeights: true,
//         overflowScroll: true,
//         updateHash: true,
//         touchScroll:true
//     });
// }

// .typeString("Hello World!")
//   .pauseFor(2000)
//   .deleteAll()

typewriter
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

document.addEventListener("DOMContentLoaded", function () {
  var messageState = document.getElementById("messageState");
  var message = document.querySelector(".message");
  var heart = document.querySelector(".heart");
  var container = document.querySelector(".container");

  if (messageState) {
    messageState.addEventListener("change", function () {
      message.classList.remove("openNor", "closeNor");

      if (messageState.checked) {
        message.classList.remove("closed", "no-anim");
        message.classList.add("openNor");

        heart.classList.remove("closeHer", "openedHer");
        heart.classList.add("openHer");

        container.style.transition = "background-color 2s";
        container.style.backgroundColor = "#f48fb1";

        console.log("Abrindo");
      } else {
        message.classList.remove("no-anim");
        message.classList.add("closeNor");

        heart.classList.remove("openHer", "openedHer");
        heart.classList.add("closeHer");

        container.style.transition = "background-color 2s";
        container.style.backgroundColor = "#fce4ec";

        console.log("fechando");
      }
    });
  }

  if (message) {
    message.addEventListener("animationend", function (e) {
      console.log("Animation End");

      if (message.classList.contains("closeNor")) {
        message.classList.add("closed");
      }

      message.classList.remove("openNor", "closeNor");
      message.classList.add("no-anim");
    });
  }

  if (heart) {
    heart.addEventListener("animationend", function (e) {
      console.log("Animation End");

      if (!heart.classList.contains("closeHer")) {
        heart.classList.add("openedHer", "beating");
      } else {
        heart.classList.add("no-anim");
        heart.classList.remove("beating");
      }

      heart.classList.remove("openHer", "closeHer");
    });
  }
});

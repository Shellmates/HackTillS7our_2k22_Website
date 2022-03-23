var qt_Buttons = document.querySelectorAll(".quotes-buttons button");
var quotes = document.querySelectorAll(".quotes .single-quote");

function showQuote(quoteIndex) {
  qt_Buttons.forEach(function (node) {
    node.style.backgroundColor = "#fff";
  });
  qt_Buttons[quoteIndex].style.backgroundColor = "#FFC947";
  quotes.forEach(function (node) {
    if (node != quoteIndex) {
      node.classList.add("hidden");
      node.classList.remove("flexcol");
    }
  });
  quotes[quoteIndex].classList.remove("hidden");
  quotes[quoteIndex].classList.add("flexcol");
}

showQuote(0);

var tabButtons = document.querySelectorAll(".previous-buttons button");
var tabpanels = document.querySelectorAll(".previous-paragraphs .tab");

function showPanel(panelIndex) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });

  tabButtons[panelIndex].style.backgroundColor = "#0A001E";
  tabButtons[panelIndex].style.color = "#F9C953";
  tabButtons[panelIndex].style.borderTop = "1px solid #FFC947";
  tabButtons[panelIndex].style.borderRight = "1px solid #FFC947";
  tabButtons[panelIndex].style.borderLeft = "1px solid #FFC947";
  tabButtons[panelIndex].style.borderBottom = "none";

  tabButtons.forEach(function (node) {
    if (node != tabButtons[panelIndex]) {
      node.style.borderTop = "none";
      node.style.borderLeft = "none";
      node.style.borderRight = "none";
      node.style.borderBottom = "1px solid #FFC947";
    }
  });

  tabpanels.forEach(function (node) {
    node.style.display = "none";
  });

  tabpanels[panelIndex].style.display = "flex";
  tabpanels[panelIndex].style.borderLeft = "1px solid #FFC947";
  tabpanels[panelIndex].style.borderBottom = "1px solid #FFC947";
  tabpanels[panelIndex].style.borderRight = "1px solid #FFC947";
  tabpanels[panelIndex].style.backgroundColor = " #0A001E";
}

showPanel(1);

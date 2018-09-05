function applyCollapsible() {
  var coll = document.getElementsByClassName("collapsible-toggle");
  var i;

  for (i = 0; i < coll.length; i++) {
    // Set "click" event listener on all menuitems
    coll[i].querySelector("a").addEventListener("click", function() {
      var parent = this.parentElement;
      var sibling = this.nextElementSibling;
      // alternate menu open/close states
      if (sibling !== null) {
        if (parent.classList.contains("collapsible-toggle-toggled")) {
          parent.classList.remove("collapsible-toggle-toggled");
        } else {
          parent.classList.add("collapsible-toggle-toggled");
        }
      }
    });
  }
}

function openIndex() {
  console.log("openIndex");
  document.getElementById("index").style.display = "block";
}
function closeIndex() {
  console.log("closeIndex");
  document.getElementById("index").style.display = "none";
}

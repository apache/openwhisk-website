
function applyCollapsible() {

    var coll = document.getElementsByClassName("collapsible-toggle");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var sibling = this.nextElementSibling;
        console.log(sibling)
        if(sibling!==null){
          if (sibling.style.display === "block") {
            sibling.style.display = "none";
          } else {
            sibling.style.display = "block";
          }
        }
      });
    }
}

function openIndex() {
          console.log("openIndex")
  document.getElementById("index").style.display = "block";
}
function closeIndex() {
            console.log("closeIndex")
  document.getElementById("index").style.display = "none";
}

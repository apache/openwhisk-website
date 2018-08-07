
function applyCollapsible() {

    var coll = document.getElementsByClassName("collapsible-toggle");
    var i;

    // Apply exapandable (arrows) to all menuitems with a sibling
    for (i = 0; i < coll.length; i++) {
      var sibling = coll[i].nextElementSibling;

      if(sibling!==null){
          coll[i].style.listStyleImage = "url('../images/elements/arrow-right-12px.png')";
          // (top right bottom left)
          sibling.style.padding = "0px 0px 0px 20px";
      }

      // Set "click" event listener on all menuitems
      coll[i].addEventListener("click", function() {
        var sibling = this.nextElementSibling;
        // alternate menu open/close states
        if(sibling!==null){
          if (sibling.style.display === "block") {
            this.style.listStyleImage = "url('../images/elements/arrow-right-12px.png')";
            sibling.style.display = "none";
          } else {
            this.style.listStyleImage = "url('../images/elements/arrow-down-12px.png')";
            sibling.style.display = "block";
          }
        }
      });
    }
}

// If sizing of arrows becomes an issue, we can use background approach instead
// li
// {
//     background: url(../images/arrow_icon.gif) no-repeat 4px 4px transparent;
//     background-image: url("x.png");
//     list-style-type: none;
//     margin: 0;
//     padding: 2px;
//     vertical-align: middle;
// }

function openIndex() {
          console.log("openIndex")
  document.getElementById("index").style.display = "block";
}
function closeIndex() {
            console.log("closeIndex")
  document.getElementById("index").style.display = "none";
}


function applyCollapsible() {
  addListenersToIndex();
  addListenersToSections();
}

function addListenersToIndex()
{
  var coll = document.getElementsByClassName("index-menu-toggle");
  var i;

  // Apply exapandable (arrows) to all menuitems with a sibling
  for (i = 0; i < coll.length; i++) {
    var sibling = coll[i].nextElementSibling;

    if(sibling!==null){
        coll[i].style.listStyleImage = "url('../images/elements/arrow-right-12px.png')";
        // (top right bottom left)
        // make room on left for image/icon
        sibling.style.padding = "0px 0px 0px 20px";

        if(sibling.classList.contains('index-menu-start-open')){
          coll[i].style.listStyleImage = "url('../images/elements/arrow-down-12px.png')";
        }
    }

    // Set "click" event listener on all menuitems
    coll[i].addEventListener("click", function() {
      var sibling = this.nextElementSibling;
      // toggle menu open/close states
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

function addListenersToSections()
{
  var coll = document.getElementsByClassName("section-toggle");
  var i;

  // Apply exapandable (arrows) to all menuitems with a sibling
  for (i = 0; i < coll.length; i++) {
    var sibling = coll[i].nextElementSibling;

    if(sibling!==null){
      sibling.setAttribute('data-display', sibling.style.display);
      if(coll[i].classList.contains("section-toggle-start-open")){
        coll[i].style.backgroundImage = "url('../images/elements/circle-minus.png')";
      } else {
        coll[i].style.backgroundImage = "url('../images/elements/circle-plus.png')";
      }
    }

    // Set "click" event listener on all menuitems
    coll[i].addEventListener("click", function() {
      var sibling = this.nextElementSibling;
      // toggle menu open/close states
      if(sibling!==null){
        console.log("sibling.style.display: ["+sibling.style.display+"]");
        if (sibling.style.display !== "none") {
          console.log("collapsing");
          sibling.style.display = "none";
          this.style.backgroundImage = "url('../images/elements/circle-plus.png')";
        } else {
          console.log("expanding");
          sibling.style.display = "block";
          this.style.backgroundImage = "url('../images/elements/circle-minus.png')";
        }
      }

    });
  }
}

/*
 *  Debug
 */
// function dumpCSSText(element){
//   var s = '';
//   var o = getComputedStyle(element);
//   for(var i = 0; i < o.length; i++){
//     s+= ">> " + o[i] + ':' + o.getPropertyValue(o[i])+';\n';
//   }
//   return s;
// }

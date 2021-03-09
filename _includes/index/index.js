
function applyCollapsible() {
  addListenersToIndex();
  addListenersToSections();
}

function toggleReferencedSection( parentId, expand )
{
  console.log( "toggleReferencedSection(): parentId=" + parentId + " expand=" + expand);
  if (parentId !== ""){
    sectionName = parentId.replace("index", "section");
    //console.log( "toggleReferencedSection(): sectionName=" + sectionName);
    sectionHeader = document.getElementById(sectionName);
    section = sectionHeader.nextElementSibling;
    if(expand){
          sectionHeader.style.backgroundImage = "url('../images/elements/circle-minus.png')";
          section.style.display = "block";
    }
    else{
          sectionHeader.style.backgroundImage = "url('../images/elements/circle-plus.png')";
          section.style.display = "none";
    }
  }
}

function addListenersToIndex()
{
  var coll = document.getElementsByClassName("index-menu-toggle");
  var i;

  // Apply expandable (arrows) to all menuitems with a sibling
  for (i = 0; i < coll.length; i++) {
    var sibling = coll[i].nextElementSibling;

    if(sibling!==null){
        coll[i].style.listStyleImage = "url('../images/elements/arrow-right-12px.png')";
        // make room on left for image/icon (top right bottom left)
        sibling.style.padding = "0px 0px 0px 20px";

        if(sibling.classList.contains('index-menu-start-open')){
          coll[i].style.listStyleImage = "url('../images/elements/arrow-down-12px.png')";
          sibling.style.display = "block";
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

          if (this.id !== ""){
            toggleReferencedSection(this.id, false )
          }
        } else {
          this.style.listStyleImage = "url('../images/elements/arrow-down-12px.png')";
          sibling.style.display = "block";

          if (this.id !== ""){
            toggleReferencedSection(this.id, true )
          }
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
      if(sibling.classList.contains("section-toggle-start-open")){
        coll[i].style.backgroundImage = "url('../images/elements/circle-minus.png')";
        sibling.style.display = "block";
      } else if (sibling.classList.contains("section-toggle-start-closed")){
        coll[i].style.backgroundImage = "url('../images/elements/circle-plus.png')";
        sibling.style.display = "none";
      } else {
        //console.log( "addListenersToSections(): No Toggle style found; default to open");
        coll[i].style.backgroundImage = "url('../images/elements/circle-minus.png')";
        sibling.style.display = "block";
      }
    }

    // Set "click" event listener on all menuitems
    coll[i].addEventListener("click", function() {
      var sibling = this.nextElementSibling;
      // toggle menu open/close states
      if(sibling!==null){
        //console.log("sibling.style.display: ["+sibling.style.display+"]");
        if (sibling.style.display !== "none") {
          //console.log("collapsing");
          sibling.style.display = "none";
          this.style.backgroundImage = "url('../images/elements/circle-plus.png')";
        } else {
          //console.log("expanding");
          sibling.style.display = "block";
          this.style.backgroundImage = "url('../images/elements/circle-minus.png')";
        }
      }

    });
  }
}

/*
 *  Debug:
 */
// Use: console.log(dumpCSSText(this));
// function dumpCSSText(element){
//   var s = '';
//   var o = getComputedStyle(element);
//   for(var i = 0; i < o.length; i++){
//     s+= ">> " + o[i] + ':' + o.getPropertyValue(o[i])+';\n';
//   }
//   return s;
// }

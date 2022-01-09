let foundDsq = false;

window.addEventListener("load", function() {
  document.querySelectorAll("iframe").forEach(element => {
    if(element.id.includes("dsq") && !foundDsq){
        foundDsq = true;
        element.style = "display: none";
    }
  })
});
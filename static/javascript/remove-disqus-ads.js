let foundDsq = false;

window.addEventListener("load", function() {
  let elements = document.querySelectorAll('[id^="dsq-"]');
  elements.forEach(element => {
    if(elements.length > 1 && !foundDsq){
        foundDsq = true;
        element.style = "display: none";
    }
  })
});
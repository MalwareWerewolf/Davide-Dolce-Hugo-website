let foundDsq = false;

window.addEventListener("load", function () {
  setTimeout(function () {
    let elements = document.querySelectorAll("#disqus_thread > iframe");
    elements.forEach((element, index) => {
      if (elements.length > 1 && !foundDsq && index !== 1) {
          foundDsq = true;
          element.style = "display: none";              
      }
    })
  }, 2000);
});

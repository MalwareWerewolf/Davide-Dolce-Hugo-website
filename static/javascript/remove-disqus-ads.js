window.addEventListener("load", setTimeout(function () {
  let elements = document.querySelectorAll("#disqus_thread > iframe");
  elements.forEach((element, index) => {
    if (elements.length > 1 && index !== 1) {
      element.style = "display: none";
    }
  })
}, 2000));
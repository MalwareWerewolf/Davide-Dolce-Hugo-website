let foundDsq = false;

window.addEventListener("load", function () {
    setInterval(function () {
        let elements = document.querySelectorAll('[id^="dsq-"]');
        elements.forEach(element => {
            if (elements.length > 1 && !foundDsq) {
                foundDsq = true;
                element.style = "display: none";
                console.log("entered");
            }
        })
    }, 300);
});

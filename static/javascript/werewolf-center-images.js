((d) => {
    d.querySelectorAll("img").forEach(element =>
    {
        let closestElement = element.closest("p");
        if(closestElement !== null){
            closestElement.style = "text-align: center";
        }
    });
})(document)
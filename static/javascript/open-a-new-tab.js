((d) => {
    d.querySelectorAll("p > a").forEach(element =>
    {
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noopener noreferrer");
    });
})(document)
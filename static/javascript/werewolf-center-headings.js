((d) => {
    d.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(element =>
    {
        element.style = "text-align: center";
    });

    let postMeta = d.getElementsByClassName("post-meta");
    if(postMeta.length === 1){
        postMeta[0].style = "text-align: center";
        postMeta[0].insertAdjacentHTML('afterend', '<hr />');
    }
})(document)
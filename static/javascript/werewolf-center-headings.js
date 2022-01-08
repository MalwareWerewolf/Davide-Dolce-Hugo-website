const styleTextCenterProperty = "text-align: center";

(() => {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(element =>
    {
        element.style = styleTextCenterProperty;
    });

    let postMeta = document.getElementsByClassName("post-meta");
    if(postMeta.length === 1){
        postMeta[0].style = styleTextCenterProperty;
        postMeta[0].insertAdjacentHTML('afterend', '<hr />');
    }
    else{
        let title = document.querySelector("h1.title");
        if(title !== null){
            title.insertAdjacentHTML('afterend', '<hr />');
        }       
    }
})()
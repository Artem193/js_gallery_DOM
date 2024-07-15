"use strict";
const listImg = document.getElementById("thumbs");
const largeImg = document.getElementById("largeImg");
listImg.addEventListener("click", (evt)=>{
    let target = evt.target;
    evt.preventDefault();
    if (target.tagName === "IMG") target = target.parentElement;
    largeImg.setAttribute("src", target.href);
});

//# sourceMappingURL=index.f75de5e1.js.map

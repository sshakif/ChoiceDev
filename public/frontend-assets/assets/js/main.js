(function ($) {
    "use strict";


    // Awards One Hover Img
    const link = document.querySelectorAll(".awards-one__single");
    const linkHoverReveal = document.querySelectorAll(".awards-one__img");
    const linkImages = document.querySelectorAll(".awards-one__img-hover");
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("mousemove", (e) => {
            linkHoverReveal[i].style.opacity = 1;
            linkHoverReveal[i].style.transform = `translate(-250%, -50% ) rotate(5deg)`;
            linkImages[i].style.transform = "scale(1, 1)";
            linkHoverReveal[i].style.left = e.clientX + "px";
        });
        link[i].addEventListener("mouseleave", (e) => {
            linkHoverReveal[i].style.opacity = 0;
            linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
            linkImages[i].style.transform = "scale(0.8, 0.8)";
        });
    }










})(jQuery);
const navbar = document.querySelector(".navbar");

//! buttons
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function (){
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e){
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    });
});

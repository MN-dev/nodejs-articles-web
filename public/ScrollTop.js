const scrollToTop = document.querySelector(".toTopBtn");
scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
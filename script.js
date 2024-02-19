document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const btn = document.querySelector("button");

    if (window.scrollY > 340) {
        nav.style.backgroundColor = "white";
        btn.style.backgroundColor = "#1a8917";
    } else if (window.scrollY <= 340) {
        nav.style.backgroundColor = "#ffc017";
        btn.style.backgroundColor = "#191919";
    }
});

window.addEventListener("scroll", function() {
    var title = document.querySelector(".title");
    title.classList.toggle("sticky", window.scrollY > 150);

    // var nav = document.querySelector(".nav");
    // nav.classList.toggle("sticky", window.scrollY > 800);
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
});

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
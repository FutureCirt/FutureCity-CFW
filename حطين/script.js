// تغيير لون الهيدر عند النزول
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.65)";
    } else {
        nav.style.background = "rgba(0,0,0,0.35)";
    }
});

// فتح/قفل القوانين مثل ريسبكت
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".rule-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
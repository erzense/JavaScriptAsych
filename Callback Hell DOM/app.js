const text1 = document.querySelector(".one");
const text2 = document.querySelector(".two");
const text3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    setTimeout(() => {
        text1.style.color = "red";
        setTimeout(() => {
            text2.style.color = "green";
            setTimeout(() => {
                text3.style.color = "blue";
            }, 1000);
        }, 1000);
    }, 1000);
})
const text1 = document.querySelector(".one");
const text2 = document.querySelector(".two");
const text3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    addColor(1000,text1,"red");
})

function addColor(time,element,color){
    return new Promise((resolve,reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
            }, time);
        }
        else{
            reject(new Error("There was an error"));
        }
    })
}
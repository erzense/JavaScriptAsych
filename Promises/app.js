const text1 = document.querySelector(".one");
const text2 = document.querySelector(".two");
const text3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    
})

const promise = new Promise((resolve,reject) => {
    let value = true;
    if (value) resolve("hey value is true");
    reject("There was an error");
});

console.log(promise);

promise.then((taco) => {
    console.log(taco);
}).catch((err) => {
    console.log(err)
})
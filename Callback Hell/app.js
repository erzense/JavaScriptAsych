boilWater();
console.log("Chop Carrots");

function boilWater (time){
    console.log("Boiling")
    setTimeout(() => {
        console.log("Done");
        console.log("Add Carrots");
        setTimeout(() => {
            console.log("Carrots Done");
        }, 3000);
    }, 2000);
}
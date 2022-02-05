/* 
for(let i = 1; i < 6; i++){
    console.log(i);
} */


/* function consoleNumber(n){
    for(let i = 1; i < n; i++){
        console.log(i);
    }    
}
consoleNumber(6); */


// used recursion method
function consoleNumber(i){
    if(i > 5){
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);
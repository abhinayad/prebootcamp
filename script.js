const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {userInput.push(data);
});
inp.on("close", () => {
    //start-here
    var a = userInput[0].split(" ");
    var a1 = userInput[1].split(" ");
    var a2 = userInput[2].split(" ");
    console.log(userInput);
    var d = parseInt(a[0])+parseInt(a[1]]+parseInt(a[2])
    +parseInt(a1[0])+parseInt(a1[1])+parseInt(a1[2])+parseInt(a2[0])
    +parseInt(a2[1])+parseInt(a2[2]);
    console.log(d);
   //end-here 
   });
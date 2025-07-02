console.log("Hello I am conditional tutorial")

let age = 76;
if(age>18){
    console.log("you can drive")
}
else{
    console.log("you cannot drive")
}

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you are tall")
    console.log("Hey " + name + " you are cute")
}
nice("Satya")
nice("Sa")

function sum(a,b) {
    console.log(a+b);
}
sum(4,8);

//Arrow function
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(87);
func1(36);
///Дз №1
function canSmoke(age){
    age = 17
    if(age < 18){
        return("Тобі не можна курити");
    }else if( age > 18){
        return("Тобі вже можна курити");
    }else{
        return("Курити заборонено");
    }

}
console.log(canSmoke(18));

///Дз №2
myfunction()

function myfunction(){
    console.log(123)
}

 var greeting = function(names){
    return "Hello," + names;
 }
var message = greeting ("Stas")
console.log(message);

const printmessage1 = message1 => console.log(message1)
printmessage1("Шо ти голова")

///Дз №3
let allowedTOin = (name, age, department) => {
    let message1 = {
        name: name,
        age: age,
        department: department
    };
    return message1;
};

let message1 = allowedTOin("Grisha", 72, "ded");
console.log(message1);

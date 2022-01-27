//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
var age;
age = 28;

if(age >= 18){
    console.log("você é maior de idade.")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
var amIhuman;
amIhuman = true;

if(age >= 18 && amIhuman == true){
    console.log("Você é um ser humano maior de idade.")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
var bday;
bday = 1;

if(bday == 1 || bday == 12){
    console.log("Há grandes chances que você seja capricorniane ou sargitariane e algumas chances que você seja aquariane")
}else{
    console.log("Seu aniversário não é em Dezembro ou Janeiro :/")
}


//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
var nam;
nam = "Nadiely";

if(nam[0]=="R"){
    console.log("Parabéns! Seu nome começa com 'R'")
}else{
    console.log("Seu nome não começa com 'R' :'(")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
var familyName;
familyName = "Silva";

if(familyName.length>=6 ||nam[0]=="E"){
    console.log("Seu sobrenome tem mais de 6 letras ou seu nome começa com 'E'")
}else{
    console.log("Seu sobrenome tem MENOS de 6 letras OU seu nome NÃO começa com 'E'")
};
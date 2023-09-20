//Luua array numbritega ja leida spetsiifilise numbri index
const array = [1, 2, 3, 4, 5, "hi"];

function findIndex(array, element) {
  return array.indexOf(element);
}
console.log(findIndex(array, 5));

//Arrow functions

//Funktsioon, mis liidab kaks numbrit kokku
function addNumbers(number1, number2) {
  return number1 + number2;
}
console.log(addNumbers(2, 6));

//Arrow funktsioonina
const arrowFunction = (num1, num2) => {
  return num1 + num2;
};
console.log(arrowFunction(4, 7));

//Short hand arrow funktsioonina
//const arrow = () => {}
//const arrow = () => {return}
const arrowFunction2 = (num1, num2) => num1 + num2;
console.log(arrowFunction2(4, 7) == arrowFunction(4, 7));
console.log(arrowFunction2(4, 7));

//Nested

//Funktsioon, mida saab välja kutsuda nii:
//console.log(addNumbers2(3)(4))
function addNumbers2(num1, num2) {
  return function addNumbersHelper(num2) {
    return num1 + num2;
  };
}
console.log(addNumbers2(3)(4));

//Arrow function samast funktsioonist
const addNumbers3 = (num1) => (num2) => num1 + num2;
console.log(addNumbers3(3)(4));

//Arrow function printida "Hello (nimi)" ja kasutada string literals
const nameEvelin = "Evelin";
const name = `Name is ${nameEvelin}`;
const nameString = (name) => `Name is ${name}`;
console.log(nameString("Evelin"));

//Map & filter

const numberArray = [1, 2, 3, 4, 5, 6];
//Igale elemendile liita +5, uus muutuja [6,7,8,9,10,11]
//newArray = [6,7,8,9,10,11]
//.map(() => {});
const newArray = numberArray.map((element, index, array) => {
  console.log({
    element: element,
    newElement: element + 5,
    index: index,
    array,
  });
  return element + 5;
});
//Muudame objektiks, console.log-ides paremini märgata
console.log({ newArray });

//Filter

//Uus massiiv omab kõiki numberid numerArray'st, mis on väiksemad kui 4
const filteredArray = numberArray.filter((element) => element < 4);
console.log(1 < 4);
console.log({ numberArray, filteredArray });

//Luua massivi põhjal objektide massiiv, mis koosneb sellisel kujul objektidest:
//{
//  name: 'Anni',
//  age: 24,
//  email: 'anni@company.com',
//  address: 'Anni Street 55'
//  username: 'innA'
//}

const names = ["Siim", "Maali", "Juhan", "Annika"];
const data = names.map((name) => {
  return {
    name,
    age: name.length + 20,
    email: `${name.toLowerCase()}@company.com`,
    address: `${name} Street 55`,
    username: name.split("").reverse().join(""),
  };
});
console.log(data);

//Siimule pikkus juurde lisada
console.log(data[0]);

const oldSiim = data[0];
const newSiim = {
  ...oldSiim,
  height: 185,
};

//Muuta Siimu vanus, kõik muud andmed jäävad samaks
const evenNewerSiim = {
  ...newSiim,
  age: 57,
};
console.log({ newSiim, evenNewerSiim });

// == ja ===
5 == "5"; // true, == teisendab stringi "5" arvuks 5
5 === "5"; // false, === kontrollib väärtusi

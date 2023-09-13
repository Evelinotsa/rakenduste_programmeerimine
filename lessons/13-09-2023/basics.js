//Luua array numbritega ja leida spetsiifilise numbri index
const array = [1,2,3,4, "hi"]

function findMyIndex(array, element){
    return array.indexOf(element)
}
console.log(findMyIndex(array, 4))

//Funktsioon, mis liidab kaks numbrit kokku
function addNumbers(number1, number2){
    return number1 + number2
}
console.log(addNumbers(3,5))

//arrowFunction
const arrowFunction = (num1, num2) => {
    return num1 + num2
}
console.log(arrowFunction(3, 5))

//arrowFunction2 - kontroll
const arrowFunction2 = (num1, num2) => num1 + num2
//const arrow = () => {}
//const arrow = () => {return}
console.log(arrowFunction(3,5) == arrowFunction2(3, 5))
console.log(arrowFunction2(3, 5))

/*Nested (console.log(addNumbers2(3)(4)))
function addNumbers2(num1, num2){
    return function addNumbersHelper(num2){
        return num1+num2
    }
}*/

//Looge samast funktsioonist arrowFunction

const addNumbers2 = num1 => num2 => num1+num2

console.log(addNumbers2(3)(4))

//arrowFunction printida "Hello (nimi)" ja kasutada string literals
const nameEvelin = "Evelin"
const name = `Name is ${nameEvelin}`
//$(variableName)

const nameString = (name) => `Name is ${name}`
console.log(nameString("Evelin"))

//map/filter/reduce?
const numberArray = [1,2,3,4,5]
//const newArray = [6,7,8,9,10]
//.map(()=>{})
const newArray = numberArray.map((element, index, array) => {
    console.log({
        element: element,
        newElement: element + 5,
        "index": index,
        array
    })
    return element + 5
})
console.log({newArray})

//Filter
//Uus massiiv omab kõiki numberid numerArray'st, mis on väiksemad kui 4
const filteredArray = numberArray.filter(element => element < 4)

console.log({ numberArray, filteredArray })

console.log(1 < 4)

//const data = ...
const names = ['Juku', 'Mari', 'Jaan', 'Anni']

/*age: tähtede arv + 20
email: nimi + @company.com, väikesed tähed
address: nimi + Street 55
username: nimi tagurpidi*/

/*const data = names.map(name => {
    return {
        name: ...
    }
})*/
const data = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name.toLowerCase()}@company.com`,
        address: `${name} Street 55`,
        username: name.split("").reverse().join("")
    }
})
console.log(data)

//Lisa juurde pikkus
const oldJuku = data[0]

const newJuku = {
    ...oldJuku,
    height: 175
}
console.log({ newJuku })

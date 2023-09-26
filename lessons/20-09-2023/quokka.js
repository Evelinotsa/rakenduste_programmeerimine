// == / ===

console.log(1 == "1")
console.log(1 === "1")

//String to number

let actuallyANumber = "1"
console.log(parseInt(actuallyANumber))
console.log(+actuallyANumber)

const a = 1,
  b = 2,
  c = 3

//Trading places
;(() => {
  let a = 99,
    b = 1

  console.log({ a, b })
  ;[a, b] = [b, a]

  console.log({ a, b })
})()

const evelin = {
  name: "Evelin",
  school: "TLU"
}

console.log(evelin.name + " " + evelin.school)

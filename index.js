const datefns = require('date-fns') 
const dialog1 = "you can\'t sleep in my class"

/*console.log(datefns.format(new Date(),"MM/dd/yyyy HH:mm"))
console.log(dialog1)*/

//console.log("Hello World !!");

// let firstName = "Pitchayaphum"
// let age = 18

// console.log(firstName + age)

// let info = `
// My name is ${firstName}
// My age  is ${age} years old

// `
// console.log(info);

const user = {
    name : "Pitchayaphum",
    salary : 50000,
    address:{ 
        province: "Songkhla",
        postcode : 90000
    }
}

//console.log(user.address.postcode)

const showData = () => `
    ${user.name}

`
const showData2 = () =>{
    let info = 'My name is '
    return `${info}${user.name}`

}
   
const sumNumber = (a,b) => a+b

const {name,salary,address:{postcode},address:{province}} = user



console.log(province)
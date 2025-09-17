
const user = {
    name: "Zunair Khawja", 
    age: 22, 
    country: "Pakistan", 
    sayHi(){
        return ("Hey!", this.name)
        
    }
}

console.log(`The name of user is : ${user.name}`)
console.log(`From : ${user["country"]}`)
console.log(user.sayHi())
user.city = "sialkot"
console.log(user)

// Object Destructuring
const {city, name, age} = user
console.log(city, name, age)


const mySym = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhry",
     [mySym] : "myKey1",
    age: 18,
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(typeof(JsUser[mySym]))
//console.log(JsUser.LastLoginDays)

JsUser.email = "hitesh@chatgpt.com"
//console.log(JsUser)
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

// objects in jvascript
// singleton
// how to declare it using constructor

//const tinderUser = new Object() // singleton
const tinderUser = {} // non-singleton or literals

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfulname: {
            firstname: "hitesh",
            lastname: "choudhry"
        }
    }
}
//console.log(regularUser.fullname.userfulname)

const obj1 = {1: "a", 2: "b" }
const obj2 ={3: "a", 4: "b"}

//const obj3 = { obj1,  obj2 }
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [  // array
    {
        id: 1,
        email: "h@gmail.com"
    },

]

//console.log(users[0].email)
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser).length);
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//Variables
console.log("------------------------------------------");
let a;
console.log("Before assignment:", a);
a = 10;
console.log("After assignment:", a); 

const b = 20
console.log(b)
console.log("------------------------------------------");

//type of
console.log(typeof 42);       
console.log(typeof "Hello");  
console.log(typeof true);     
console.log(typeof undefined);
console.log(typeof {});       
console.log(typeof []);       
console.log(typeof null);     
console.log(typeof NaN);      

console.log(Array.isArray([]));
console.log(Number.isNaN(NaN));
console.log("------------------------------------------");

// let vs const
let obj1 = { name: "Shubham", age: 25 };
const obj2 = { name: "Harsh", age: 22 };

obj1.age = 26;
obj2.age = 26;

console.log(obj1, obj2); 

delete obj1.name
delete obj2.age; 
console.log(obj1, obj2);

console.log("------------------------------------------");
//Type conversion and comparison
console.log("Type conversion and comparison");

let age = 20
if (age >= 0 && age <= 12){
    console.log(age,": child");
} else if (age >= 13 && age <= 18){
    console.log(age,": teen");
} else if (age > 18){
    console.log(age,": adult");
}else{
    console.log("Invalid Age");
}
//Using swiitch
switch (true) {
    case (age >=0 && age <= 12):
        console.log("Child");
        break;
    case (age >= 13 && age <= 18):
        console.log("Teen");
        break;
    default:
        console.log("Adult");
}

//Array
let arraySize = 25;
let fornumbers = [];
let whilenumbers = []

for (let i = 1; i <= arraySize; i++) {
    fornumbers.push(i);
}
console.log("Using for loop",fornumbers);

let i = 1
while(i<=arraySize){
    whilenumbers.push(i)
    i++;
}
console.log("Using While loop",whilenumbers);

console.log("------------------------------------------");
//Functions
console.log("Functions");

function test(cb) {
    return cb(); 
}

function callbackFunc() {
    console.log("Calling the callback function");
    return 5;
}
console.log(test(callbackFunc));
console.log(callbackFunc());

console.log(test(() => callbackFunc()));

function test1(callback) {
    return callback;
}

console.log(test1(callbackFunc));

console.log("------------------------------------------");
//Operators

let no = 10;

console.log(no++);
// console.log(++no);

let str = "Hello";
console.log(str[10]);  
console.log(str[-1]);

console.log(JSON.stringify([1, 2, 3]));            
console.log(JSON.stringify({ a: 1, b: { c: 2 } })); 
console.log(JSON.stringify(42));                  
console.log(JSON.stringify("Hello"));             
console.log(JSON.stringify(null));                
console.log(JSON.stringify(undefined));           
console.log(JSON.stringify({ key: undefined }));  
console.log("---------------------------------------------");

//Arrays
const people = [
    { 
      "id": 1, 
      "first_name": "Nicki", 
      "email": "ncrozier0@squarespace.com", 
      "date_of_birth": "2009/05/09" 
    },
    { 
      "id": 2, 
      "first_name": "Raychel",
      "email": "rmcgrady1@cpanel.net", 
      "date_of_birth": "1996/11/05" 
    },
    { 
      "id": 3, 
      "first_name": "Demetris", 
      "email": "dkilshall2@elpais.com", 
      "date_of_birth": "2018/12/31" 
    },
    { 
      "id": 4, 
      "first_name": "Amata", 
      "email": "abraiden3@canalblog.com", 
      "date_of_birth": "2012/05/23" 
    },
    { 
      "id": 5, 
      "first_name": "Venita", 
      "email": "vheap4@clickbank.net", 
      "date_of_birth": "2020/10/04" 
    },
    { 
      "id": 6, 
      "first_name": "Fairfax", 
      "email": "fcrichton5@merriam-webster.com", 
      "date_of_birth": "2009/12/23" 
    },
    { 
      "id": 7, 
      "first_name": "Kathleen", 
      "email": "kvasyukhnov6@devhub.com", 
      "date_of_birth": "2010/12/20" 
    },
    { 
      "id": 8, 
      "first_name": "Sam", 
      "email": "scorck7@sitemeter.com", 
      "date_of_birth": "2020/08/30" 
    },
    { 
      "id": 9, 
      "first_name": "Virgilio", 
      "email": "vferandez8@e-recht24.de", 
      "date_of_birth": "2000/09/07" 
    },
    { 
      "id": 10, 
      "first_name": "Townie", 
      "email": "tpetyt9@upenn.edu", 
      "date_of_birth": "2018/09/01" 
    }
  ];
  
  function filterByName(name) {
    return people.filter(person => person.first_name.toLowerCase().includes(name.toLowerCase()));
  }
  console.log(filterByName('Nicki'));  
  console.log(filterByName('Am'));    

  const emails = people.map(person => person.email);

function getById(id){
    return people.find(person => person.id === id);
}
console.log(getById(1));

console.log("---------------------------------------------");

//Objects
const originalObj = { 
    name: "Harry Potter", 
    age: 12, 
    address: { 
      details: ["4", "Privet Drive"], 
      area: "Little Whinging", 
      city: "Surrey", 
      state: "England" 
    }
  };
  
  // copy of object
const newObj = {
    ...originalObj,
    address: {
        ...originalObj.address,
        details: ["5", ...originalObj.address.details.slice(1)]
    }
};
  console.log(newObj);
  

  function filterObj(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => !Array.isArray(value) && typeof value !== 'object'
      )
    );
  }
  
  let obj = { 
    a: "Apple", 
    b: ["Basketball", "Baseball"], 
    c: { call: "cellphone" }, 
    d: "Dog" 
  };
  
  console.log(filterObj(obj)); 
  
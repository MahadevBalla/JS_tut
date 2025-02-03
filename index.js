// --------------------Displaying O/P--------------------

// console.log("Hello");

// window.alert("Kuchisabishi!!");

// --------------------Variables--------------------

// let name = "Mahadev Balla";
// console.log(`My name is ${name}`);
// console.log(typeof name);
// let age;
// age = window.prompt("Enter your age : ");

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = `My name is ${name}. I am ${age} years old.`;

// --------------------User I/P--------------------

// let username, password;
// document.getElementById("submit").onclick = () => {
//   username = document.getElementById("uname").value;
//   password = document.getElementById("pass").value;
//   document.getElementById("msg").textContent = `Welcome...${username}!`;
// };

// --------------------Type Conversion--------------------

// let x = "Mahadev";
// let y = "Mahadev";
// let z = "Mahadev";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// --------------------Constants--------------------

// const PI = 3.14159; // immutable variable
// let rad, area;
// document.getElementById("submit").onclick = () => {
//   rad = document.getElementById("rad").value;
//   area = PI * rad * rad;
//   document.getElementById(
//     "msg"
//   ).textContent = `Radius of the circle is ${area}`;
// };

// --------------------Counter--------------------

// const inc = document.getElementById("incBtn");
// const dec = document.getElementById("decBtn");
// const reset = document.getElementById("resetBtn");
// const count = document.getElementById("cnt");
// let cnt = 0;

// inc.onclick = function () {
//   cnt++;
//   count.textContent = cnt;
// };
// dec.onclick = () => {
//   cnt--;
//   count.textContent = cnt;
// };
// reset.onclick = () => {
//   cnt = 0;
//   count.textContent = cnt;
// };

// --------------------Math object--------------------

// console.log(Math.PI);
// console.log(Math.E);

// let x = -14.73, y = 2, z = 99;
// let temp;
// temp = Math.floor(x);
// temp = Math.ceil(x);
// temp = Math.round(x);
// temp = Math.abs(x); //omits -ve sign
// temp = Math.trunc(x); //eliminates decimal component
// temp = Math.pow(x,y); //x raised to y
// temp = Math.sqrt(x);
// temp = Math.log(x); //log to the base 10
// temp = Math.sin(x); //sinh
// temp = Math.cos(x); //cosh
// temp = Math.tan(x); //tanh
// temp = Math.minNum(x, y, z);
// temp = Math.maxNum(x, y, z);
// console.log(temp);

// --------------------Random Number Generator--------------------

// const minNum = 50;
// const maxNum = 100;
// let randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
// console.log(randomNum);

// --------------------Checked Property--------------------

// const checkBox = document.getElementById("checkBox");
// const visa = document.getElementById("visa");
// const masterCard = document.getElementById("masterCard");
// const payPal = document.getElementById("payPal");
// const submit = document.getElementById("submit");
// const subRes = document.getElementById("subRes");
// const payRes = document.getElementById("payRes");

// submit.onclick = () => {
//   if (checkBox.checked) {
//     subRes.textContent = "You are subscribed !!";
//   } else {
//     subRes.textContent = "You aren't subscribed!!";
//   }

//   // subRes.textContent = checkBox.checked ? "You are subscribed !!" : "You aren't subscribed!!"; //ternary operator

//   if (visa.checked) {
//     payRes.textContent = "Paying with Visa..";
//   } else if (masterCard.checked) {
//     payRes.textContent = "Paying with Master Card..";
//   } else if (payPal.checked) {
//     payRes.textContent = "Paying with PayPal..";
//   } else {
//     payRes.textContent = "Select a payment method !";
//   }
// };

// --------------------Switch case--------------------

// let day = Math.floor(Math.random() * (7 - 1)) + 1;
// switch (day) {
//   case 1:
//     console.log("Monday..");
//     break;

//   case 2:
//     console.log("Tuesday..");
//     break;

//   case 3:
//     console.log("Wednesday..");
//     break;

//   case 4:
//     console.log("Thursday..");
//     break;

//   case 5:
//     console.log("Friday..");
//     break;

//   case 6:
//     console.log("Saturday..");
//     break;

//   case 7:
//     console.log("Sunday..");
//     break;

//   default:
//     console.log("Value isn't in the range 1-7");
// }

// --------------------Strings--------------------

// let s = "Mahadev  ";
// let n = "Radha";
// let pno = "123-456-7890";
// let email = "mahadev@gmail.com";
// console.log(s.charAt(0)); //M
// console.log(s.indexOf("a")); //1
// console.log(s.lastIndexOf("a")); //3
// console.log(s.length); //7
// console.log(s.trim()); //trims whitespaces
// console.log(s.toUpperCase()); //converts all characters to upper case
// console.log(s.toLowerCase()); //converts all characters to lower case
// console.log(n.repeat(3)); //"RadhaRadhaRadha"
// console.log(s.startsWith("M")); //true
// console.log(s.endsWith("M")); //false
// console.log(s.includes(" ")); //true
// console.log(n.replace("h", "k")); //"Radka"
// console.log(pno.replaceAll("-", "/")); //"123/456/7890"
// console.log(pno.padStart(15, "0")); //"000123-456-7890"
// console.log(s.slice(0, 4)); //"Maha"
// console.log(n.slice(-3)); //"dha"
// console.log("Username : " + email.slice(0, email.indexOf("@"))); //"mahadev"
// console.log("Extension : " + email.slice(email.indexOf("@") + 1)); //"gmail.com"

// --------------------Method Chaining--------------------

// let username = window.prompt("Enter your username : ");
// console.log(
//   username.trim().charAt(0).toUpperCase() +
//     username.trim().slice(1).toLowerCase()
// );
// i/p : mahAdEv
// o/p : Mahadev

// --------------------Number Guessing--------------------

// const minNum = 50;
// const maxNum = 100;
// const ans = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

// let attempts = 0,
//   guess,
//   running = true;

// // console.log(ans);

// while (running) {
//   guess = window.prompt(`Guess a number b/w ${minNum} - ${maxNum}`);
//   guess = Number(guess);
//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number !");
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert("Please enter a valid number !");
//   } else {
//     attempts++;
//     if (ans < guess) {
//       window.alert("Too high...Try Again !");
//     } else if (ans > guess) {
//       window.alert("Too low...Try Again !");
//     } else {
//       window.alert(`Correct...The answer was ${ans}`);
//       running = false;
//     }
//   }
// }

// --------------------Arrays--------------------

// let fruits = ["orange", "strawberry", "apple"];
// fruits.push("mango"); //adds element to the end of the array
// fruits.pop(); //deletes last element of the array & returns it
// fruits.unshift("raspberry"); //adds element to the beginning of the array
// fruits.shift(); //deletes first element of the array & returns it
// console.log(fruits.length); //3
// console.log(fruits.indexOf("kiwi")); //-1

// fruits.sort().reverse();
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// --------------------Spread operator--------------------

// let username = "Mahadev Balla";
// let letters = [...username].join("-");
// console.log(letters); //"M-a-h-a-d-e-v- -B-a-l-l-a"

// let fruits = ["orange", "strawberry", "apple"];
// let veggies = ["carrots", "potatoes", "onions"];
// let food = [...fruits, ...veggies, "paneer"];
// console.log(food);

// --------------------Rest operator--------------------

// function getFood(...foods) {
//   console.log(foods);
//   return foods;
// }
// const v1 = "carrots",
//   v2 = "potatoes",
//   v3 = "onions";
// const f = rest(v1, v2, v3);

// function combineStrings(...strings) {
//   return strings.join(" ");
// }
// const fullname = combineStrings("Mahadev", "Shrikrishna", "Balla");
// console.log(fullname); //"Mahadev Shrikrishna Balla"

// --------------------Random Password Generator--------------------

// function generatePassword(
//   length,
//   includesUpperCase,
//   includesLowerCase,
//   includesNumbers,
//   includesSymbols
// ) {
//   const lowerChars = "abcdefghijklmnopqrstuvwxyz";
//   const upperChars = lowerChars.toUpperCase();
//   const numChars = "0123456789";
//   const symbolChars = "!@#$%^&*~";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includesLowerCase ? lowerChars : "";
//   allowedChars += includesUpperCase ? upperChars : "";
//   allowedChars += includesNumbers ? numChars : "";
//   allowedChars += includesSymbols ? symbolChars : "";

//   if (length <= 4) {
//     return `Password length must be atleast 5`;
//   }
//   if (allowedChars.length === 0) {
//     return `Atleast one set of character needs to be selected`;
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIdx = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIdx];
//   }
//   return password;
// }
// const length = 12;
// const includesUpperCase = true;
// const includesLowerCase = true;
// const includesNumbers = true;
// const includesSymbols = true;

// const password = generatePassword(
//   length,
//   includesUpperCase,
//   includesLowerCase,
//   includesNumbers,
//   includesSymbols
// );
// console.log(password);

// --------------------s--------------------

// hello();
// function hello() {
//   setTimeout(function () {
//     console.log("Hello!");
//   }, 1000);
// }

// hello(goodbye);
// function hello() {
//   console.log("Hello!");
//   ();
// }
// function goodbye() {
//   console.log("Goodbye!");
// }

// sum(visibilityConsole, 3, 2);
// sum(visibilityPage, 3, 2);
// function sum(, x, y) {
//   let result = x + y;
//   (result);
// }
// function visibilityConsole(result) {
//   console.log(result);
// }
// function visibilityPage(result) {
//   document.getElementById("myH1").textContent = result;
// }

// --------------------.forEach()--------------------

// let nos = [1, 2, 3, 4, 5];
// nos.forEach(double); //2 4 6 8 10
// nos.forEach(sq); //4 16 36 64 100
// nos.forEach(visibility);
// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function sq(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }
// function visibility(element) {
//   console.log(element);
// }

// let fruits = ["apple", "orange", "mango", "kiwi"];
// fruits.forEach(upperCase); //APPLE ORANGE MANGO KIWI
// fruits.forEach(capitalize); //Apple Orange Mango Kiwi
// fruits.forEach(visibility);
// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }
// function visibility(element) {
//   console.log(element);
// }

// --------------------.map()--------------------

// const nos = [1, 2, 3, 4, 5];
// const squares = nos.map(sq);
// const doubledNos = nos.map(double);
// console.log(squares); //(5) [1, 4, 9, 16, 25]
// console.log(doubledNos); //(5) [2, 4, 6, 8, 10]
// function double(element) {
//   return element * 2;
// }
// function sq(element) {
//   return Math.pow(element, 2);
// }

// --------------------.filter()--------------------
// creates a new array by filtering out elements

// let nos = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = nos.filter(isEven); //[2, 4, 6]
// let oddNums = nos.filter(isOdd); //[1, 3, 5, 7]
// console.log(evenNums);
// console.log(oddNums);
// function isEven(element) {
//   return element % 2 === 0;
// }
// function isOdd(element) {
//   return element % 2 !== 0;
// }

// --------------------.reduce()--------------------
// reduce the elements of an array to a single value

// const prices = [5, 30, 10, 15, 20];
// const total = prices.reduce(sum);
// console.log(`Rs.${total}`);
// function sum(accumulator, element) {
//   return accumulator + element;
// }

// const prices = [5, 30, 10, 15, 20];
// const maximum = prices.reduce(getMax);
// console.log(maximum); //30
// console.log(prices.reduce(getMin)); //5
// function getMax(accumulator, element) {
//   return Math.max(accumulator, element);
// }
// function getMin(accumulator, element) {
//   return Math.min(accumulator, element);
// }

// --------------------Function Expressions--------------------
//func declaration: defining a reusable block of code
//func expression: a way of defining funcs as values or variables
//can pass an entire func as an argument to methods

// const nos = [1, 2, 3, 4, 5];
// const sq = nos.map(function (element) {
//   return Math.pow(element, 2);
// });
// const cubes = nos.map(function (element) {
//   return Math.pow(element, 3);
// });
// const evenNums = nos.filter(function (element) {
//   return element % 2 === 0;
// });
// const total = nos.reduce(function (accumulator, element) {
//   return accumulator + element;
// });
// console.log(sq); //(5) [1, 4, 9, 16, 25]
// console.log(cubes); //(5) [1, 8, 27, 64, 125]
// console.log(evenNums); //(2) [2, 4]
// console.log(total); //15

// --------------------Arrow funcs--------------------

// const hello = (name) => {
//   console.log(`Hello ${name}!`);
// };
// hello("Mahadev");

// setTimeout(greet("Mahadev"), 3000);
// function greet() {
//   console.log(`Hello !`);
// }

// setTimeout(function greet() {
//   console.log("Hello !");
// }, 2000);

// setTimeout(() => {
//   console.log("Hiiie....");
// }, 2000);

// const nos = [1, 2, 3, 4, 5];
// const squares = nos.map((element) => Math.pow(element, 2)); //(5) [1, 4, 9, 16, 25]
// const cubes = nos.map((element) => Math.pow(element, 3)); //(5) [1, 8, 27, 64, 125]
// const evenNums = nos.filter((element) => element % 2 == 0); //(2) [2, 4]
// const total = nos.reduce((accumulator, element) => accumulator + element); //15
// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(total);

// --------------------Objects--------------------

// const person1 = {
//   firstName: "Mahadev",
//   lastName: "Balla",
//   age: 19,
//   sayHello: function () {
//     console.log(`Hello...I'm ${this.firstName} !`); //THIS keyword doesn't work in case of arrow funcs
//   },
// };
// const person2 = {
//   firstName: "Radha",
//   lastName: "Balla",
//   age: 49,
//   sayHello: () => {
//     console.log("Hello...");
//   },
// };
// console.log(person1.firstName); //"Mahadev"
// console.log(person1.lastName); //"Balla"
// console.log(person1.age); //30
// person1.sayHello(); //"Hello...I'm Mahadev !"

// --------------------Constructor--------------------

// function car(company, model, year, color) {
//   this.company = company;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`You're driving ${this.model}`);
//   };
// }

// const car1 = new car("Ford", "Mustang", 2024, "white");
// console.log(car1.company); //"Ford"
// console.log(car1.model); //"Mustang"
// console.log(car1.year); //2024
// console.log(car1.color); //"white"
// car1.drive(); // "You're driving Mustang"

// --------------------Classes--------------------

// class Person {
//   constructor(name, profession, salary) {
//     this.name = name;
//     this.profession = profession;
//     this.salary = salary;
//   }

//   visibilityDetails() {
//     console.log(`Name : ${this.name}`);
//     console.log(`Profession : ${this.profession}`);
//     console.log(`Salary : ${this.salary.toFixed(2)}`);
//   }
// }

// const person1 = new Person("Natasha Raul", "Professor", 149999.99);
// const person2 = new Person("Amol Deshpande", "Professor", 109999.99);
// person1.visibilityDetails();

// --------------------static keyword--------------------

// class Circle {
//   static PI = 3.14159;
//   static Area(r) {
//     return this.PI * r * r;
//   }
//   static Circumference(r) {
//     return 2 * this.PI * r;
//   }
// }

// console.log(Circle.PI); //3.14159
// console.log(Circle.Area(10)); //314.159
// console.log(Circle.Circumference(10)); //62.8318

// --------------------inheritance--------------------

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }
// class Rabbit extends Animal {
//   name = "rabbit";
//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";
//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// rabbit.eat(); //"This rabbit is eating"
// rabbit.run(); //"This rabbit is running"
// fish.swim(); //"This fish is swimming"

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   alive = true;
//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// const rabbit = new Rabbit("bunny", 3, 10);
// const fish = new Fish("fish", 2, 15);
// rabbit.run(); //"This bunny is running"
// fish.swim(); //"This fish is swimming"
// rabbit.eat(); //"This bunny is eating"
// fish.sleep(); //"This fish is sleeping"

// --------------------Getters & Setters--------------------

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Enter a positive number !");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Enter a positive number !");
//     }
//   }

//   get width() {
//     return this._width;
//   }

//   get height() {
//     return this._height;
//   }

//   get area() {
//     return (this._width * this._height).toFixed(2);
//   }
// }
// const rect = new Rectangle(3, 4);
// console.log(rect.area);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstName = newFirstName;
//     } else {
//       console.error("First name must be a non-empty string !");
//     }
//   }

//   set lastName(newlastName) {
//     if (typeof newlastName === "string" && newlastName.length > 0) {
//       this._lastName = newlastName;
//     } else {
//       console.error("Last name must be a non-empty string !");
//     }
//   }

//   set age(newAge) {
//     if (typeof newAge === "number" && newAge > 0) {
//       this._age = newAge;
//     } else {
//       console.error("Age must be a non-negative number !");
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get age() {
//     return this._age;
//   }

//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }
// }
// const person = new Person("Mahadev", "Balla", 19);
// console.log(person.age); //19
// console.log(person.lastName); //Balla
// console.log(person.fullName); //Mahadev Balla

// --------------------Destructuring--------------------
// extracting values from arrays & objects, then assigning them to variables in a convenient way

// const colors = ["red", "blue", "green", "white", "pink"];
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// const person1 = {
//   firstName: "Mahadev",
//   lastName: "Balla",
//   age: 19,
//   hobby: "Cricket",
// };
// const { firstName, lastName, age, hobby } = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(hobby);

// const person2 = {
//   firstName: "Ashutosh",
//   lastName: "Balla",
//   age: 20,
// };
// // const { firstName, lastName, age, job = "Unemployed" } = person2;
// // console.log(firstName);
// // console.log(lastName);
// // console.log(age);
// // console.log(job);

// function visibilityPerson({ firstName, lastName, age, job }) {
//   console.log(`Name : ${firstName} ${lastName}\nAge : ${age}\nJob : ${job}`);
// }
// visibilityPerson(person2);

// --------------------Nested Objects--------------------

// const person = {
//   fullName: {
//     firstName: "Mahadev",
//     lastName: "Balla",
//   },
//   age: 19,
//   hobbies: ["Cricket", "Chess", "Cooking"],
//   address: {
//     street: "G.M. Bhosale Marg",
//     city: "Mumbai",
//     pinCode: 400018,
//   },
// };
// console.log(person.hobbies[2]); //Cooking
// console.log(person.fullName.firstName); //Mahadev
// console.log(person.address.pinCode); //400018

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }
// class Address {
//   constructor(street, city, pinCode) {
//     this.street = street;
//     this.city = city;
//     this.pinCode = pinCode;
//   }
// }
// const person1 = new Person(
//   "Mahadev",
//   19,
//   "G.M. Bhosale Marg",
//   "Mumbai",
//   400018
// );

// const person2 = new Person("Radha", 49, "Ganpat Jadhav Marg", "Mumbai", 400018);

// console.log(person1.address); //Address {street: 'G.M. Bhosale Marg', city: 'Mumbai', pinCode: 400018}

// --------------------Array of Objects--------------------

// const fruits = [
//   { name: "pineapple", color: "yellow", calories: 37 },
//   { name: "apple", color: "red", calories: 95 },
//   { name: "orange", color: "orange", calories: 45 },
//   { name: "banana", color: "yellow", calories: 105 },
// ];
// fruits.push({ name: "grapes", color: "green", calories: 62 }); //adds obj
// console.log(fruits.length); //5
// console.log(fruits[2].calories); //45
// fruits.pop();
// console.log(fruits.length); //4

// fruits.forEach((fruit) => console.log(fruit.calories));

// const fruitNames = fruits.map((fruit) => fruit.name);
// console.log(fruitNames); //(4) ['pineapple', 'apple', 'orange', 'banana']

// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");

// console.log(yellowFruits);
// // O/P -
// // (2) [{…}, {…}]
// // 0: {name: 'pineapple', color: 'yellow', calories: 37}
// // 1: {name: 'banana', color: 'yellow', calories: 105}
// // length: 2;
// // [[Prototype]]: Array(0)

// const maxCalFruit = fruits.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );
// console.log(maxCalFruit); //{name: 'banana', color: 'yellow', calories: 105}

// --------------------sort method--------------------
// sorts in lexicographic manner

// let nos = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
// nos.sort();
// console.log(nos); //(10) [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// nos.sort((a, b) => a - b);
// console.log(nos); //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const people = [
//   { name: "Mahadev", age: 19 },
//   { name: "Radha", age: 49 },
//   { name: "Shrikrishna", age: 53 },
//   { name: "Shivani", age: 27 },
// ];
// people.sort((a, b) => a.age - b.age);
// console.log(people);
// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);

// --------------------shuffle an array--------------------

// const cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// // technique is inefficient to deal with large arrays
// cards.sort(() => Math.random() - 0.5);
// console.log(cards); //(14) [7, 10, 1, 'J', 9, 'Q', 'K', 'A', 3, 4, 8, 5, 2, 6]

// //Fisher-Yates algo
// shuffle(cards);
// console.log(cards); //(14) [10, 'K', 8, 'Q', 4, 3, 'J', 1, 'A', 6, 5, 2, 7, 9]
// function shuffle(array) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// --------------------Dates--------------------

// const date1 = new Date();
// console.log(date1); //Sat Oct 19 2024 10:08:11 GMT+0530 (India Standard Time)
// const month1 = date1.getMonth();
// console.log(month1); //9
// const hrs1 = date1.getHours();
// const min1 = date1.getMinutes();
// const sec1 = date1.getSeconds();
// const day1 = date1.getDate();
// const dayOfWeek1 = date1.getDay();
// console.log(hrs1); //10
// console.log(min1); //8
// console.log(sec1); //11
// console.log(day1); //19
// console.log(dayOfWeek1); //6

// //Date(year, month(0-11), date, hour, minute, second, ms)
// const date2 = new Date(2005, 9, 23, 8, 30, 15, 2);
// console.log(date2); //Sun Oct 23 2005 08:30:15 GMT+0530 (India Standard Time)
// const day2 = date2.getUTCDay();
// console.log(day2); //0

// const date3 = new Date("2024-06-02T14:00:07Z");
// const year3 = date3.getFullYear();
// console.log(date3); //Sun Jun 02 2024 19:30:07 GMT+0530 (India Standard Time)
// console.log(year3); //2024
// date3.setFullYear(2011);
// date3.setMonth(0);
// date3.setDate(1);
// date3.setHours(2);
// date3.setMinutes(3);
// console.log(date3); //Sat Jan 01 2011 02:03:07 GMT+0530 (India Standard Time)

// --------------------Closures--------------------
// a func defined inside of another func; inner func can accesss variables & scope of the outer func

// function outer() {
//   let msg = "Hello";
//   function inner() {
//     console.log(msg);
//   }
//   inner();
// }
// outer(); //"Hello"

// let cnt = 100;
// function inc() {
//   cnt++;
//   console.log(`Count increased to ${cnt}`);
// }
// inc(); //Count increased to 101
// inc(); //Count increased to 102
// inc(); //Count increased to 103

// function createCounter() {
//   let cnt = 100;
//   function inc() {
//     cnt++;
//     console.log(`Count increased to ${cnt}`);
//   }
//   function getCount() {
//     return cnt;
//   }
//   return { inc, getCount };
// }
// const counter = new createCounter();
// counter.inc(); //Count increased to 101
// counter.inc(); //Count increased to 102
// console.log(`The current count is ${counter.getCount()}`); //The current count is 102

// function createGame() {
//   let score = 0;
//   function incScore(pts) {
//     score += pts;
//     console.log(`+${pts}pts`);
//   }
//   function decScore(pts) {
//     score -= pts;
//     console.log(`-${pts}pts`);
//   }
//   function getScore() {
//     return score;
//   }
//   return { incScore, decScore, getScore };
// }
// const game = new createGame();
// game.incScore(5); //+5pts
// game.decScore(3); //-3pts
// game.incScore(6); //+6pts
// console.log(`The final score is ${game.getScore()}pts`); //The final score is 8pts

// --------------------setTimeout function--------------------
// setTimeout(, delay);
// clearTimeout(timeoutId) = cancels a timeout before it triggers

// function sayHello() {
//   window.alert("Hello World !");
// }
// setTimeout(sayHello, 2000);

// setTimeout(function sayHello() {
//   window.alert("Hello World !");
// }, 2000);

// const timeoutId = setTimeout(() => {
//   window.alert("Hello World !");
// }, 2000);
// clearTimeout(timeoutId);

// let timeoutId;
// function startTimer() {
//   timeoutId = setTimeout(() => window.alert("Hello..Mahadev !"), 2000);
//   console.log("Started");
// }
// function clearTimer() {
//   clearTimeout(timeoutId);
//   console.log("Cleared");
// }

// --------------------Digital Clock--------------------

// function updateClock() {
//   const now = new Date();
//   let hrs = now.getHours();
//   const meridiem = hrs >= 12 ? "PM" : "AM";
//   hrs = hrs % 12 || 12;
//   hrs = hrs.toString().padStart(2, "0");
//   const mins = now.getMinutes().toString().padStart(2, "0");
//   const sec = now.getSeconds().toString().padStart(2, "0");
//   const timeString = `${hrs}:${mins}:${sec} ${meridiem}`;
//   document.getElementById("clock").textContent = timeString;
// }
// updateClock();
// setInterval(updateClock, 1000);

// --------------------Stopwatch--------------------

// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");
// const resetBtn = document.getElementById("resetBtn");
// const clock = document.getElementById("clock");

// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// startBtn.onclick = function start() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(upate, 10);
//     isRunning = true;
//     // console.log(timer);
//   }
//   //   console.log(startTime);
// };

// stopBtn.onclick = function stop() {
//   if (isRunning) {
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     isRunning = false;
//   }
// };

// resetBtn.onclick = function reset() {
//   clearInterval(timer);
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   clock.textContent = "00:00:00:00";
// };

// function upate() {
//   const currTime = Date.now();
//   elapsedTime = currTime - startTime;

//   let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let secs = Math.floor((elapsedTime / 1000) % 60);
//   let milliSecs = Math.floor((elapsedTime % 1000) / 10);

//   hrs = hrs.toString().padStart(2, "0");
//   mins = mins.toString().padStart(2, "0");
//   secs = secs.toString().padStart(2, "0");
//   milliSecs = String(milliSecs).padStart(2, "0");

//   clock.textContent = `${hrs}:${mins}:${secs}:${milliSecs}`;
// }

// --------------------ES6 Module--------------------
// An external file that contains reusable code that can be imported into other JavaScript files.
// Write reusable code for many different apps. Can contain variables, classes, functions...and more

// import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

// console.log(PI);
// console.log(getCircumference(10).toFixed(2));
// console.log(getArea(12).toFixed(2));
// console.log(getVolume(15).toFixed(2));

// --------------------Intro to async--------------------

// function f1() {
//   setTimeout(() => {
//     console.log("Task 1");
//     ();
//   }, 2000);
// }
// function f2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }
// f1(f2);

// --------------------Error Handling--------------------
// Error : An object that is created to represent a problem that occurs
// Errors occur often with user i/p or establishing a connection

// try {
//   console.log(x);
//   //NETWORK ERRORS
//   //PROMISE REJECTION
//   //SECURITY ERRORS
//   //encloses code that might potentially cause an error
// } catch (error) {
//   //catch and handle any thrown Errors from try block
//   console.error(error);
// } finally {
//   //(optional)Always executes. Used mostly for clean up. ex: close files, close connections, release resources
//   console.log("This always executes...");
// }
// console.log("EOP");

// try {
//   const dividend = window.prompt("Enter a dividend : ");
//   if (isNaN(dividend)) {
//     throw new Error("I/P must be a number!");
//   }

//   const divisor = window.prompt("Enter a divisor : ");
//   if (isNaN(divisor)) {
//     throw new Error("I/P must be a number!");
//   }

//   if (divisor == 0) {
//     throw new Error("Can't divide by zero!");
//   }
//   const res = dividend / divisor;
//   console.log(res);
// } catch (error) {
//   console.error(error);
// }
// console.log("EOP");

// --------------------Calculator--------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const visibility = document.getElementById("visibility");

//   function appendTovisibility(input) {
//     visibility.value += input;
//   }

//   function clearvisibility() {
//     visibility.value = "";
//   }

//   function calc() {
//     try {
//       visibility.value = eval(visibility.value);
//     } catch (error) {
//       visibility.value = "Error";
//     }
//   }

//   window.appendTovisibility = appendTovisibility;
//   window.clearvisibility = clearvisibility;
//   window.calc = calc;
// });

// --------------------DOM-Element Selectors--------------------

// document.title = "Tutorial";
// document.body.style.backgroundColor = "hsl(196, 100%, 75%)";
// console.log(document);

// document.getElementById() //Element or Null
// document.getElementsByClassName() //HTML Collection
// document.getElementsByTagName() //HTML Collection
// document.querySelector() //First element or Null
// document.querySelectorAll() //NodeList

// const heading = document.getElementById("heading");
// heading.style.backgroundColor = "lightblue";
// heading.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");
// // console.log(fruits);
// fruits[2].style.backgroundColor = "orange";
// Array.from(fruits).forEach((fruit) => {
//   fruit.style.textAlign = "center";
// });

// const divElements = document.getElementsByTagName("div");
// console.log(divElements);
// for (let element of divElements) {
//   element.style.backgroundColor = "lightblue";
//   element.style.textAlign = "center";
//   element.style.border = "2px solid black";
//   element.style.margin = "5px";
//   element.style.borderRadius = "3px";
// }
// Array.from(divElements).forEach((element) => {
//   element.style.backgroundColor = "lightblue";
//   element.style.textAlign = "center";
//   element.style.border = "2px solid black";
//   element.style.margin = "5px";
//   element.style.borderRadius = "3px";
// });

// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "lightblue";

// const fruits = document.querySelectorAll(".fruits");
// fruits[0].style.backgroundColor = "yellow";
// fruits[2].style.backgroundColor = "orange";

// const h4Elements = document.querySelectorAll("h4");
// const liElements = document.querySelectorAll("li");
// // for (let element of h4Elements) {
// //   element.style.backgroundColor = "lightpink";
// // }
// Array.from(h4Elements).forEach((element) => {
//   element.style.backgroundColor = "lightpink";
// });
// // for (let element of liElements) {
// //   element.style.backgroundColor = "lightgreen";
// // }
// Array.from(liElements).forEach((element) => {
//   element.style.backgroundColor = "lightgreen";
// });

// --------------------DOM Navigation--------------------

// .firstElementChild

// const fruits = document.getElementById("fruits");
// const firstChild = fruits.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((elememt) => {
//   const firstChild = elememt.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

// .lastElementChild

// const fruits = document.getElementById("fruits");
// const lastChild = fruits.lastElementChild;
// lastChild.style.backgroundColor = "orange";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((elememt) => {
//   const lastChild = elememt.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// });

// .nextElementSibling

// const elememt = document.getElementById("Mango");
// const nextSibling = elememt.nextElementSibling; //selects "Orange"
// const elememt = document.getElementById("fruits");
// const nextSibling = elememt.nextElementSibling; //selects "veggies"
// nextSibling.style.backgroundColor = "orange";

//Similarly we have .previousElementSibling property

// .parentElement

// const elememt = document.getElementById("Orange");
// const parent = elememt.parentElement; //slects "fruits" - ul element
// parent.style.backgroundColor = "lightblue";

//Similarly we have .children property (can also access individual children using indices)

// --------------------Add & Change HTML--------------------

// const newH1 = document.createElement("h1");
// newH1.textContent = "Mahadev Shrikrishna Balla";
// newH1.id = "name";
// newH1.style.backgroundColor = "lightblue";
// newH1.style.textAlign = "center";
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box2").append(newH1);
// document.getElementById("box2").prepend(newH1);

// Synatx : document.body.insertBefore(newElement, currentElement);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[0]);
// document.body.insertBefore(newH1, boxes[2]);

// document.body.append(newH1);
// document.body.removeChild(newH1);

// document.getElementById("box2").append(newH1);
// document.getElementById("box2").removeChild(newH1);

// const newLI = document.createElement("li");
// newLI.textContent = "Apple";
// newLI.style.backgroundColor = "red";
// // document.body.append(newLI);
// // document.getElementById("fruits").append(newLI);
// // document.getElementById("fruits").prepend(newLI);
// // const orange = document.getElementById("Orange");
// // document.getElementById("fruits").insertBefore(newLI, orange);
// const fruits = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newLI, fruits[2]);
// // document.getElementById("fruits").removeChild(newLI);

// --------------------Mouse Events--------------------
// events : click, mouseover, mouseout
// .addEventListener(event, );

// const box = document.getElementById("box");
// // const changeBG = (event) => {
// //   console.log(event);
// //   event.target.style.backgroundColor = "lightpink";
// //   event.target.textContent = "pink";
// // };
// // box.addEventListener("click", changeBG);

// // box.addEventListener("click", (event) => {
// //   event.target.style.backgroundColor = "lightpink";
// //   event.target.textContent = "pink";
// // });
// // box.addEventListener("mouseover", (event) => {
// //   event.target.style.backgroundColor = "lightgreen";
// //   event.target.textContent = "green";
// // });
// // box.addEventListener("mouseout", (event) => {
// //   event.target.style.backgroundColor = "lightskyblue";
// //   event.target.textContent = "Click here";
// // });

// const btn = document.getElementById("btn");
// btn.addEventListener("click", (event) => {
//   box.style.backgroundColor = "lightpink";
//   box.textContent = "pink";
// });
// btn.addEventListener("mouseover", (event) => {
//   box.style.backgroundColor = "lightgreen";
//   box.textContent = "green";
// });
// btn.addEventListener("mouseout", (event) => {
//   box.style.backgroundColor = "lightskyblue";
//   box.textContent = "OG";
// });

// --------------------Key Events--------------------
// events : keyup, keydown

// const box = document.getElementById("box");

// // document.addEventListener("keyup", () => {
// //   box.textContent = "🐼";
// //   box.style.backgroundColor = "lightgoldenrodyellow";
// // });
// // document.addEventListener("keydown", () => {
// //   box.textContent = "🐧";
// //   box.style.backgroundColor = "lightgreen";
// // });

// const moveAmt = 10;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", (event) => {
//   box.style.backgroundColor = "lightgreen";
//   if (event.key.startsWith("Arrow")) {
//     event.preventDefault();

//     switch (event.key) {
//       case "ArrowUp":
//         y -= moveAmt;
//         box.textContent = "⬆️";
//         break;

//       case "ArrowDown":
//         y += moveAmt;
//         box.textContent = "⬇️";
//         break;

//       case "ArrowLeft":
//         x -= moveAmt;
//         box.textContent = "⬅️";
//         break;

//       case "ArrowRight":
//         x += moveAmt;
//         box.textContent = "➡️";
//         break;
//     }
//   }
//   box.style.top = `${y}px`;
//   box.style.left = `${x}px`;
// });

// --------------------Hide/Show HTML--------------------

// const btn = document.getElementById("btn");
// const img = document.getElementById("myImg");

// btn.addEventListener("click", (event) => {
//   if (img.style.visibility === "hidden") {
//     img.style.visibility = "visible";
//     btn.textContent = "Hide";
//   } else {
//     img.style.visibility = "hidden";
//     btn.textContent = "Show";
//   }
// });

// --------------------NodeLists--------------------
// NodeList = static collection of HTML elements by (id, class, element)
//            Can be created by using .querySelectorAll()
//            Similar to an array; but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

// let btns = document.querySelectorAll(".btn");
// console.log(btns); // NodeList(4) [button.btn, button.btn, button.btn, button.btn]

// // // CSS props
// // btns.forEach((btn) => {
// //   btn.style.backgroundColor = "lightskyblue";
// //   btn.style.textShadow = "0 0 3px black";
// //   btn.style.boxShadow = "0 0 5px hsla(0, 0%, 40%, 0.8)";
// // });

// // // Click event listener
// // btns.forEach((btn) => {
// //   btn.addEventListener("click", (event) => {
// //     event.target.style.backgroundColor = "lightskyblue";
// //   });
// // });

// // // Mouseover & Mouseout event listener
// // btns.forEach((btn) => {
// //   btn.addEventListener("mouseover", (event) => {
// //     event.target.style.backgroundColor = "lightskyblue";
// //   });
// // });
// // btns.forEach((btn) => {
// //   btn.addEventListener("mouseout", (event) => {
// //     event.target.style.backgroundColor = "lightseagreen";
// //   });
// // });

// // // Add an element
// // const newbtn = document.createElement("button");
// // newbtn.textContent = "Button 5";
// // newbtn.classList = "btn";
// // document.body.appendChild(newbtn);
// // console.log(btns); // NodeList(4) [button.btn, button.btn, button.btn, button.btn]
// // btns = document.querySelectorAll(".btn");
// // console.log(btns); // NodeList(5) [button.btn, button.btn, button.btn, button.btn, button.btn]

// // Remove an element
// // btns.forEach((btn) => {
// //   btn.remove();
// // });
// // console.log(btns); // NodeList(4) [button.btn, button.btn, button.btn, button.btn]

// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     event.target.remove();
//     btns = document.querySelectorAll(".btn");
//     console.log(btns);
//   });
// });

// --------------------classList--------------------
// classList = Element property in JS used to interact with an elemen's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements across your webpage
// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

// const btn = document.getElementById("btn");
// btn.classList.add("enabled");
// btn.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "🐧";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

// let btns = document.querySelectorAll(".btn");
// btns.forEach((btn) => {
//   btn.classList.add("enabled");
// });
// btns.forEach((btn) => {
//   btn.addEventListener("mouseover", (event) => {
//     event.target.classList.toggle("hover");
//   });
// });
// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     if (event.target.classList.contains("disabled")) {
//       event.target.textContent += "🐧";
//     } else {
//       event.target.classList.replace("enabled", "disabled");
//     }
//   });
// });

// -------------------- Hell--------------------
// Situation in JS where s are nested within other s
// to the degree where the code is difficult to read.
// Old pattern to handle asynchronous funcs. Use Promises + async/await to avoid this

// function task1() {
//   setTimeout(() => {
//     console.log("Task 1...");
//     ();
//   }, 2000);
// }
// function task2() {
//   setTimeout(() => {
//     console.log("Task 2...");
//     ();
//   }, 1000);
// }
// function task3() {
//   setTimeout(() => {
//     console.log("Task 3...");
//     ();
//   }, 3000);
// }
// function task4() {
//   setTimeout(() => {
//     console.log("Task 4...");
//     ();
//   }, 1500);
// }

// // task1();
// // task2();
// // task3();
// // task4();
// // console.log("All tasks are completed!");

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("All tasks are completed!");
//       });
//     });
//   });
// });

// --------------------Promises--------------------
// An obj that manages asynchronous operations.
// Wrap a Promise Object around {asynchronous code}

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;
//       if (dogWalked) {
//         resolve("Walked the dog..");
//       } else {
//         reject("DIDN'T walk the dog!");
//       }
//     }, 1500);
//   });
// }
// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("Cleaned the kitchen..");
//       } else {
//         reject("DIDN'T clean the kitchen!");
//       }
//     }, 2500);
//   });
// }
// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = false;
//       if (trashTakenOut) {
//         resolve("Took out the trash..");
//       } else {
//         reject("DIDN'T take out the trash!");
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("Finished all the chores!");
//   })
//   .catch((error) => console.error(error));

// --------------------Async/Await--------------------
// Async/Await -> Async = makes a function return a promise
//             -> Await = makes an async function wait for a promise
// Allows you write asynchronous code in a synchronous manner.
// Async doesn't have resolve or reject set up as parameters.
// Everything after Await is placed in an event queue.

// async function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;
//       if (dogWalked) {
//         resolve("Walked the dog..");
//       } else {
//         reject("DIDN'T walk the dog!");
//       }
//     }, 1500);
//   });
// }
// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("Cleaned the kitchen..");
//       } else {
//         reject("DIDN'T clean the kitchen!");
//       }
//     }, 2500);
//   });
// }
// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = false;
//       if (trashTakenOut) {
//         resolve("Took out the trash..");
//       } else {
//         reject("DIDN'T take out the trash!");
//       }
//     }, 500);
//   });
// }

// async function doChores() {
//   try {
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);

//     console.log("Finsihed all the chores!");
//   } catch (error) {
//     console.error(error);
//   }
// }
// doChores();

// --------------------JSON files--------------------
// JSON = (JavaScript Object Notation) data-interchange format
//               Used for exchanging data between a server and a web application
//               JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

// const names = ["Mahadev", "Shivani", "Radha", "Shrikrishna", "Ashutosh"];
// const jsonString = JSON.stringify(names);
// console.log(jsonString); //["Mahadev","Shivani","Radha","Shrikrishna","Ashutosh"]
// const people = [
//   {
//     name: "Mahadev",
//     age: 19,
//     isEmployed: false,
//   },
//   {
//     name: "Shivani",
//     age: 26,
//     isEmployed: true,
//   },
//   {
//     name: "Radha",
//     age: 49,
//     isEmployed: true,
//   },
//   {
//     name: "Shrikrishna",
//     age: 54,
//     isEmployed: true,
//   },
//   {
//     name: "Ashutosh",
//     age: 20,
//     isEmployed: false,
//   },
// ];
// const jsonString = JSON.stringify(people);
// console.log(jsonString); //[{"name":"Mahadev","age":19,"isEmployed":false},{"name":"Shivani","age":26,"isEmployed":true},{"name":"Radha","age":49,"isEmployed":true},{"name":"Shrikrishna","age":54,"isEmployed":true},{"name":"Ashutosh","age":20,"isEmployed":false}]

// const people = `[
//   {
//     name: "Mahadev",
//     age: 19,
//     isEmployed: false,
//   },
//   {
//     name: "Shivani",
//     age: 26,
//     isEmployed: true,
//   },
//   {
//     name: "Radha",
//     age: 49,
//     isEmployed: true,
//   },
//   {
//     name: "Shrikrishna",
//     age: 54,
//     isEmployed: true,
//   },
//   {
//     name: "Ashutosh",
//     age: 20,
//     isEmployed: false,
//   },
// ]`;
// const jsonString = JSON.stringify(people);
// console.log(jsonString); //"[\n  {\n    name: \"Mahadev\",\n    age: 19,\n    isEmployed: false,\n  },\n  {\n    name: \"Shivani\",\n    age: 26,\n    isEmployed: true,\n  },\n  {\n    name: \"Radha\",\n    age: 49,\n    isEmployed: true,\n  },\n  {\n    name: \"Shrikrishna\",\n    age: 54,\n    isEmployed: true,\n  },\n  {\n    name: \"Ashutosh\",\n    age: 20,\n    isEmployed: false,\n  },\n]"

// const names = `["Mahadev", "Shivani", "Radha", "Shrikrishna", "Ashutosh"]`;
// const parsedData = JSON.parse(names);
// console.log(parsedData);
// //(5) ['Mahadev', 'Shivani', 'Radha', 'Shrikrishna', 'Ashutosh']
// // 0: "Mahadev"
// // 1: "Shivani"
// // 2: "Radha"
// // 3: "Shrikrishna"
// // 4: "Ashutosh"
// // length: 5
// // [[Prototype]]: Array(0) // O/P - JS Array....similarly will console log JS object if we parse a single object and an array of objects for 'people' array

// fetch("people.json")
//   .then((response) => response.json)
//   .then((values) => values.forEach((value) => console.log(value.isEmployed)));
// // O/P:
// // false
// // true
// // true
// // true
// // false

// --------------------Fetch data from an API--------------------
// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Cldn't fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Cldn't fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("PokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

// fetchData();

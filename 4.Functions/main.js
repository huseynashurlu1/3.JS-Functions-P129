var colors = ['red','black','green'];

colors[0] = 'grey';

console.log(colors);


Hello();
function Hello() {
    console.log("Hi");
}



// Fucntion Expression
const Hi = function(ad) {
    console.log("Salam " + ad)
}

Hi("Musa");



function Person(name,age) {
    this.name = name;
    this.age = age;
}


const pr1 = new Person("Perviz",20);
const pr2 = new Person("Elgiz",25);

console.log(pr1.name);
console.log(pr2.name);


EcmaScript

function Hello(ad) {
    console.log(this)
}

Hello();

const Hello1 = ad => "Welcome " + ad;

console.log(Hello1("Musa"));


const Change = x => console.log(x);


const Say = () => {
    console.log(this);
}

Say();



// Shorthand Method Definition
const Group = {
    groupname: "P129",
    showName: function() {
        return console.log("Welcome "+ this.groupname);
    },
    showName() {
        return console.log("Welcome "+ this.groupname);
    }
}


// HOF => High Order Functions


// map

const numbers = [10,21,37,44,55,66];
const odd_num = numbers.map(x => {
    if(x%2==1) {
        return x;
    }
})

console.log(odd_num);

let x = 20;
if(x%2 ==1) {

}
else{

}

const new_numbers = numbers.map(x => x>20);
// const new_numbers = numbers.map(function(x){
//     return x*3
// });

console.log(new_numbers)


// filter
 const filter_num = numbers.filter(x=>x>20);
 console.log(filter_num);



// reduce
const sum_numbers = numbers.reduce((x,y) => x+y);
console.log(sum_numbers);


// forEach

numbers.forEach(function(x) {
    console.log(x)
})

numbers.forEach(x => console.log(x));


CALL - APPLY - BIND


let apple = {
    brand: "Macbook",
    model: "Pro",
    price: 3000
}


let asus = {
    brand: "Zenbook",
    model: "M15",
    price: 2000
}


let compInfo = {
    compName: function() {
        return this.brand + " " + this.model
    },
    compPrice: function() {
        return  "$" + this.price / 1.7
    },
    compMemory: function(HDD,SSD){
        return "HDD: " + HDD + " / " + " SSD: " + SSD
    }
}

console.log(compInfo.compName.call(apple))
console.log(compInfo.compMemory.call(asus,1000,128))


console.log(compInfo.compMemory.apply(apple,[1000,256]))
console.log(compInfo.compName.apply(asus))



// Bind

const num = {
    num1: 10,
    num2: 20,
}

const num1 = {
    num1: 10,
    num2: 20,
}

function Hesabla(x,num3,num4) {
    return x.num1 + x.num2 + num3 + num4
}

let Sum = Hesabla.bind(num);

console.log(Hesabla(num,30,40))
console.log(Sum(Hesa,30,40))

MOUSE EVENTS => click,dblclick,contextmenu

let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let text = document.getElementById('text');

btn.onclick = function() {
    text.classList.toggle('active');
    // if(text.classList.contains('active')) {
    //     text.classList.remove('active');
    // }
    // else{
    //     text.classList.add('active');
    // }
}

btn1.ondblclick = function() {
    text.classList.remove('active')
}


contextmenu
window.oncontextmenu = function(e) {
    e.preventDefault();
}

let div = document.getElementById('first');

div.onmouseenter = function(e) {
    div.style.backgroundColor = 'black';
}

div.onmouseenter = (e) => div.style.backgroundColor = 'black';

div.onmouseleave = function(e) {
    div.style.backgroundColor = 'blueviolet';
}



let input = document.getElementById('input');
input.onkeyup = function(e) {
    console.log(e.target.value);
    document.getElementById('username').innerHTML = e.target.value
}



function Loader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('root').style.display = 'block';
    document.body.style.backgroundColor = "white";
}

setInterval(Loader,5000);
// setInterval



function Hesabla() {
    let value = document.getElementById('inp').value;
    // value = Number(value);
    let price = document.getElementById('price');

    price.innerHTML = value;
}


let select = document.getElementById('select');
select.onchange = function(e) {
    console.log(e.target.value)
}
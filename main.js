// QuerySelector = select an HTML element:
    // document.querySelector('.className'); .child1
    // document.querySelector('#idName');    #parent
    // document.querySelector('tagName');    <h1>

let child1 = document.querySelector('.child1');

// .innerText modifies text
child1.innerText = "CHILD 1";

// .className allows us to change the element's class. Doesn't change the HTML
child1.className = 'child2';

let child3 = document.querySelector(".child3");

// Able to apply css styles to an element
child3.style.border = '4px solid blue';
child3.style.background = 'aqua';

let image = document.querySelector("img");

image.src = 'https://f4.bcbits.com/img/a1442885542_10.jpg';

image.style.height = '678px';

let header = document.querySelector('h1');

header.innerText = "Destroyer of Hello World!";

header.style.background = 'brown';

let child4 = document.querySelector("#child4");

child4.style.fontSize = "40px";

console.log("Hello World");
console.log(child1.innerText);
// console.log(element); This will create an error because it's not defined.









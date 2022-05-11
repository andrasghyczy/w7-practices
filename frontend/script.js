/* let globalVariable1 = 12;

let globalVariable2 = function (){
    console.log("inside the function", globalVariable1); // mivel globális változó, függvényen belül is előhívható
    
    const funVariable = "Hello!"; // function scope (függvény szintű) változó
    
    const funVariable2 = function (){
        console.log("funVariable2 belsejében lévő");
        console.log(globalVariable1);
        console.log(funVariable);

        let funInFunVariable1 = true;
        let funInFunVariable2 = function (){
            console.log (funInFunVariable1) // mivel kívül van, ezért hozzáfér
        }

        funInFunVariable2()
    };
    
    funVariable2();

    console.log(funVariable);

    if (funVariable === "Hello!") {
        var blockVariable1 = "Bye!" // a var-nak nincs block scope-ja, ezért látja
    } else {
        console.log(blockVariable1)
    }
}

globalVariable2() // meghívjuk a globalVariable2 függvényt

var varVariable = 1;

let letVariable1;
console.log(letVariable1)

let letVariable2 = "variable 2";
console.log(letVariable2);

const constVariable = "ciao";
console.log(constVariable)

const constObj1 = {};
constObj1.key = "value";
// constObj1 = {key: "value"};
console.log(constObj1);

const globalVariable3 = function (parameter1, parameter2, parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    console.log(parameter3());
}

const globalVariable4 = "apple";

const globalVariable5 = function (){
    return "pear"
}

const globalVariable6 = function (){
    return "plum"
}

// globalVariable3(3,2);
// globalVariable3(3,globalVariable4);
globalVariable3(globalVariable5(),globalVariable4, globalVariable6)




/* console.log(funVariable) // nem fog tudni hozzáférni, mert a "funVariable" function változó, csak a functionon belül létezik */

const menuButtonComponent = function (){
    return`
        <button id="menu-btn"></button>
    `
}

const beerSectionComponent = function (title, sub, text, id){
    return `
        <section id="${id}">
            <h1 class="beerName">${title}</h1>
            <h2 class="beerCompany">${sub}</h2>
            <h3 class="beerType">${text}</h3>
        </section>
    `
} 

const beerAnchorComponent = function (title, id){
    return `
        <a href="#${id}">${title}</a>
    `

}

const beerNavComponent = function (inner){
    return`
        <nav>${inner}</nav>
    `

}

const menuButtonClickEvent = function (event){
    
    event.currentTarget.closest("#root").classList.toggle("menu-opened")
}

const loadEvent = function (){
    
    /*  console.log(typeof beerSectionComponent) // function
        console.log(typeof beerSectionComponent()) // return érték típusa - string
    */ 
    
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

    const menuButtonElement = document.getElementById("menu-btn");
    
    menuButtonElement.addEventListener("click", menuButtonClickEvent)

    let beerSections = "";
    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }

    rootElement.insertAdjacentHTML("beforeend", beerSections);

    let beerAnchors = "";
    for (const beer of beers.cards) {
        beerAnchors += beerAnchorComponent(beer.title)
    };

    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors));

    /*menuButtonElement.addEventListener("click", function (event){
        // event.currentTarget.classList.toggle("clicked")
        // console.log(rootElement);
        // console.log(event.currentTarget.parentElement);
        // console.log(event.currentTarget.closest("#root"));

        event.currentTarget.closest("#root").classList.toggle("menu-opened")
    })*/
}

window.addEventListener("load", loadEvent)
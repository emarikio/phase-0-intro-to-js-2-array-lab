const cats = [
    "Milo" ,
    "Otis",
    "Garfield",
]
function destructivelyAppendCat() {
cats.push("Ralph")
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat() {
    cats.shift("Bob")
}

const cat = [
    "Milo",
    "Otis",
    "Garfield"
]
function appendCat() {
    return [...cat, "Broom"];
}
function prependCat() {
    return ["Arnold", ...cat];
}
function removeLastCat() {
    return cats.slice(0,cats.length-1);
}
function removeFirstCat() {
    return cats.slice(1);
}


const employess = new Map();
employess.set("John Doe", "Manager");
employess.set("Jane Smith", "Developer");
employess.set("Bob Johnson", "Developer");

const text = "buna ziua, buna dimineata, buna seara";
const countWords = new Map();

text.split(" ").forEach(word => {
    if(countWords.has(word)) {
        countWords.set(word, countWords.get(word) + 1)
    }else {
        countWords.set(word, 1);
    }
});

countWords.forEach((value, key) => {
    console.log(key + " : " + value);
})

console.log(countWords);

const clone = new Map(employess);

console.log([...clone.keys()]);

clone.delete("Jane Smith");

console.log(clone);

clone.clear();

console.log(clone);

console.log(employess.size);

for(const [keys, values] of employess) {
    console.log(keys + " : " + values);
}

employess.forEach((value, keys) => {
    console.log(value + " - " + keys);
})

const skils = new Set(["JavaScript", "HTML", "CSS", "JavaScript"])
const skils2 = new Set(["JavaScript", "Phyton", "CSS", "C++"])
console.log(skils);

skils.add("Phyton");

console.log(skils);

for (const iterator of skils) {
    console.log(iterator);
}

const array = Array.from(skils);

console.log(array);

for (const iterator of array.values()) {
    console.log(iterator);
}

const filtred = new Set([...skils].filter((x) => skils2.has(x)));
const filtred2 = new Set([...skils].filter((x) => !skils2.has(x)));
console.log(filtred);
console.log(filtred2);

skils.delete("CSS");
console.log(skils);

skils.forEach((value) => {
    console.log(value);
})
const animals = [
    "Tiger",
    "Lion",
    "Elephant",
    "Monkey",
    "Kangroo",
    "Zebra",
    "Cow",
    "Cheetah",
    "Fox"
]

// const [t, l, ...args] = animals;
const [t, l, ...[, e, ...k]] = animals;

console.log(t, l, e, k)
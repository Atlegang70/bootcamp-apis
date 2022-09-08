export default function wordLengths(name) {
    let names = name.split(" ");
    let sum = 0;

    for (let i = 0; i < names.length; i++) {
        sum += names[i].length

    }
    return sum;

}
export default function shortestWord(names) {
    let short = names.split(" ");
    let shotest = 50;
    let word = "";

    for (let i = 0; i < short.length; i++)
        if (shotest >= short[i].length) {
            shotest = short[i].length
            word = short[i]
        }
    return word;
}
/* const list = ['best', 'company', 'ever']

let rokket = list.reduce((r, e) => r.length < e.length ? e : r, "");

console.log(rokket); */

const list = ['best', 'company', 'ever']

function rokket(list) {
    let longest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i].length > longest.length) {
            longest = list[i];
        }
    }
    return longest;
}

console.log(rokket(list));

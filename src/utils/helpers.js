export function arMaykr(data) {
    var input = data.split('\n');
    const wQuotes = input.map(input => `"${input}"`);
    const finalArray = `[${wQuotes}]`;
    return finalArray;
}
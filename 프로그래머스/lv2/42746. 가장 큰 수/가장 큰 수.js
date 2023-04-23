function solution(numbers) {
    for(let i=0;i<numbers.length;i++) {
        numbers[i] = String(numbers[i])
    }    
    numbers.sort((a, b) => b + a - (a + b));
    let result=numbers.join('');
    return result[0] === "0" ? "0" : result;
}
function solution(n) {
    let result=[];
    let num=[];
    function isPrime(number) {
        for(let i = 2; i<number; i++) {
            if(number % i === 0) return false;
        }
        return true;
    }
    for(let i=2; i<10000; i++) {
        if(isPrime(i)) num.push(i);
    }
    let i=0;
    while(n !== 1 || i !== num.length) {
        if(n % num[i] === 0) {
            n = n / num[i];
            result.push(num[i]);
        }
        else i++;
    }
    if (result.length === 0) result.push(n);
    let answer = new Set(result);
    return [...answer];
}
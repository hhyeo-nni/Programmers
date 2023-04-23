function solution(answers) {
    let a=0, b=0, c=0;
    let arrA=answers.slice(), arrB=answers.slice(), arrC=answers.slice();
    let pickA=[1,2,3,4,5];
    let pickB=[2,1,2,3,2,4,2,5];
    let pickC=[3,3,1,1,2,2,4,4,5,5];
    let result=[];
    while(arrA.length !== 0) {
        let arr=arrA.splice(0,5);
        for(let i=0; i<arr.length; i++) {
            if(pickA[i]===arr[i]) a++;
        }
    }
    while(arrB.length !== 0) {
        let arr=arrB.splice(0,8);
        for(let i=0; i<arr.length; i++) {
            if(pickB[i]===arr[i]) b++;
        }
    }
    while(arrC.length !== 0) {
        let arr=arrC.splice(0,10);
        for(let i=0; i<arr.length; i++) {
            if(pickC[i]===arr[i]) c++;
        }
    }
    if(a===Math.max(a,b,c)) result.push(1);
    if(b===Math.max(a,b,c)) result.push(2);
    if(c===Math.max(a,b,c)) result.push(3);
    return result;
}
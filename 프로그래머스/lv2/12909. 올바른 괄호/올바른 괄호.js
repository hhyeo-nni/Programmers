function solution(s){
    let arr=s.split('');
    let num=0;
    for(let i=0; i<arr.length; i++) {
        if( arr[i] === '(' ) num++;
        else if( arr[i] === ')' ) num--;
        if(num<0) return false;
    }
    if(num===0) return true;
    else return false;
}
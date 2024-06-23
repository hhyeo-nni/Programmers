function solution(s) {
    const arr = s.split(" ")
    let max = parseInt(arr[0]);
    let min = parseInt(arr[0]);
    
    for (let i=1; i<arr.length; i++) {
        if (max < parseInt(arr[i])) max = parseInt(arr[i]);
        if (min > parseInt(arr[i])) min = parseInt(arr[i]);
    }
    let result = min + " " + max
    return result;
}
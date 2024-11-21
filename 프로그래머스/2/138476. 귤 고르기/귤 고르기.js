function solution(k, tangerine) {
    var answer = 0;
    tangerine.sort((a,b) => b-a);

    const dict = {};
    
    tangerine.forEach((t) => (dict[t] = (dict[t]||0)+1));
    
    const arr = Object.values(dict).sort((a,b) => b-a);
    
    for (let i=0; i<arr.length; i++) {
        answer++;
        if (k>arr[i])
            k -= arr[i];
        else
            break;
    }
    return answer;
    
}
function solution(clothes) {
    var object = {};
    var answer = 1;
    
    for (let i=0; i<clothes.length; i++) {
        if (object.hasOwnProperty(clothes[i][1])) {
            object[clothes[i][1]]++;
        } 
        else {
            object[clothes[i][1]] = 1;    
        }
    }
    
    for (var key in object) {
        answer = answer * (object[key] + 1);
    }
    
    return answer - 1;
}
function solution(progresses, speeds) {
    let result=[];
    for(let i=0; i<progresses.length; i++) {
        result.push(0);
    }
    for(let i=0; i<progresses.length; i++) {
        while(progresses[i]<100) {
            progresses[i] = progresses[i] + speeds[i];
            result[i] = result[i]+1;
        }
    }
    console.log(result);
    let rs=[];
    let sum=1;
    let point=0;
    for(let i=point; i<result.length; i++) {
        if(result[point]>=result[i+1]) {
            sum++;
        }
        else {
            rs.push(sum);
            sum=1;
            point=i+1;
        }
    }
    return rs;
}
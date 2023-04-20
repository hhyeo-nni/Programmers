function solution(balls, share) {
    let up=1;
    let down=1;
    let num=share;
    for(let i=0; i<num; i++) {
        up=up*balls;
        down=down*share;
        balls--;
        share--;
    }
    return up/down;
}
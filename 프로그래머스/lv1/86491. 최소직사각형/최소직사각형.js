function solution(sizes) {
    for(let i=0; i<sizes.length; i++) {
        sizes[i].sort((a,b) => a-b)
    }
    let hmax=sizes[0][0];
    let vmax=sizes[0][1];
    for(let i=1; i<sizes.length; i++) {
        if(hmax<sizes[i][0]) hmax=sizes[i][0];
        if(vmax<sizes[i][1]) vmax=sizes[i][1];
    }
    return hmax*vmax;
}
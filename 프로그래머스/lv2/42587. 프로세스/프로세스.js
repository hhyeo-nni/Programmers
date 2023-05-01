function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((priority, index) => ({ priority, index })); // 객체 배열로 변환
    
    while (queue.length > 0) {
        const currentProcess = queue.shift();
        const higherPriorityProcessExists = queue.some(
            (process) => process.priority > currentProcess.priority
        );

        if (higherPriorityProcessExists) {
            queue.push(currentProcess); // 현재 프로세스를 큐의 뒤에 넣음
        }
        else {
            answer += 1; // 현재 프로세스가 실행되었으므로 answer 값 증가
            if (currentProcess.index === location) {
                return answer; // 찾고자 하는 프로세스가 실행되었으면 answer 반환
            }
        }
    }
}
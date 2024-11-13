// function solution(priorities, location) {
//     let result = [priorities[0]];
    
//     for(let i = 1; i < priorities.length; i++) {
//         if(result[result.length - 1] >= priorities[i])
//     }
// }

function solution(priorities, location) {
    let queue = priorities.map((priority, index) => [priority, index]);
    let result = 0;
    
    while(queue.length > 0) {
        let current = queue.shift();
        
        if(queue.some(([priority, _]) => priority > current[0])) {
            queue.push(current);
        } else {
            result++;
            
            if(current[1] === location) {
                return result;
            }
        }
    }
}
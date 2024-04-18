function solution(skill, skill_trees) {
    let result = 0;
    
    for(let i = 0; i < skill_trees.length; i++) {
        skill_trees[i] = [...skill_trees[i]].filter(e => skill.includes(e)).join('')
        console.log(skill_trees[i], i)
        let sk = skill.substring(0, skill_trees[i].length);
        console.log(sk, i)
        if(skill_trees[i] === sk) {
            result++;
        }
    }
    return result;
}
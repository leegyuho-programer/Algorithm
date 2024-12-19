function solution(skill, skill_trees) {
    let result = 0;
    
    for(let i = 0; i < skill_trees.length; i++) {
        let cnt = 0;
        
        skill_trees[i] = [...skill_trees[i]].filter(e => skill.includes(e)).join('');
        
        for(let j = 0; j < skill_trees[i].length; j++) {
            if(skill[j] === skill_trees[i][j]) cnt++;
        }
        
        if(skill_trees[i].length === cnt) result++;
    }

    return result;
}
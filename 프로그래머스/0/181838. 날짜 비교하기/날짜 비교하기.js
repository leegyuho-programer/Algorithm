function solution(date1, date2) {
    for(let i = 0; i < date1.length; i++) {
        if(date1[0] > date2[0]) {
            return 0;
        } else if(date1[0] < date2[0]) {
            return 1;
        } else {
            if(date1[1] > date2[1]) {
                return 0;
            } else if(date1[1] < date2[1]) {
                return 1;
            } else {
                if(date1[2] >= date2[2]) {
                    return 0;
                } else {
                    return 1;
                }
            }
        }
    }
}
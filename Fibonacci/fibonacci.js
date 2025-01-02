function fibonacci() {
    let fibArr = [];
    let prev2 = 0;
    let prev1 = 1;
    count = 0;

    while ( count < 18) {
        sum = prev1 + prev2;
        fibArr.push(sum);
        console.log(fibArr);
        prev2 = prev1;
        prev1 = sum;
        count++
    }
    
}

fibonacci();
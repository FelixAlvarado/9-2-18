// Given a positive integer n and you can do operations as follow:

// If n is even, replace n with n/2.
// If n is odd, you can replace n with either n + 1 or n - 1.
// What is the minimum number of replacements needed for n to become 1?

var integerReplacement = function(n) {
    if (n <= 1) {
        return 0;
    }
    
    let count = 0;
    
    while (n > 1){
        if (n % 2 != 0){
            if(((n-1)/2) % 2 === 0 || ((n-1)/2) === 1){
                n -= 1;
            }else {
                n += 1;
            }
        count += 1;
    }
         n = n/2;
         count += 1;
    }
    
    return count;
};
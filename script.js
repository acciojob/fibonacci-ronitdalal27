function fibonacci(num) {
	// your code here
    if (num === 0) return 0; // Base case: the 0th Fibonacci number is 0
    if (num === 1) return 1; // Base case: the 1st Fibonacci number is 1
    
    let a = 0;
    let b = 1;
    let fib;

    for (let i = 2; i <= num; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

module.exports = fibonacci;

function fibonacci(num) {
	// your code here
    if (num === 0) return 0; // Base case
    if (num === 1) return 1; // Base case
    
    let a = 0, b = 1;
    for (let i = 2; i < num; i++) { // Loop till num-1 for 0-based index
        [a, b] = [b, a + b]; // Update a and b using array destructuring
    }
    return b;
}

module.exports = fibonacci;

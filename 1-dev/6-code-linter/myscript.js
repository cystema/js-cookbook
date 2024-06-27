function fibonacciIterative(n) {
    if (n <= 1) return n;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }
  
  // Example usage:
  console.log("Iterative Approach:");
  console.log(fibonacciIterative(10)); // Output: 55
  console.log(fibonacciIterative(20)); // Output: 6765
  
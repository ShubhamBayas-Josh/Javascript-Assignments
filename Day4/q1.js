// Create a memoised function that returns the cached value when the same arguments
// are passed.

function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = args.join(','); 
  
      if (cache[key]) {
        return cache[key]; 
      }
  
      const result = fn(...args); 
      cache[key] = result; 
      return result;
    };
  }

  const add = (a, b) => a + b;
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3)); 
  console.log(memoizedAdd(2, 3)); 
  
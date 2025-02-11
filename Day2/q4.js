// Function that returns a rejected promise
const testAsyncFunction = () => {
    return Promise.reject('Test static reject');
  };
  
  testAsyncFunction()
    .then((res) => {
      console.log('Response in then block', res);  
    })
    .catch((err) => {
      console.log('Error in catch block', err);  
    });

    
// Output
// Error in catch block Test static reject

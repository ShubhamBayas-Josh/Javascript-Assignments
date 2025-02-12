
// Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  
  const func = async () => {
    console.log("Printing before");
    await sleep(3000); 
    console.log("Printing after");
  };
  
  func();
// Complete the above tasks with async/await.

const fetchDataWithDelay = async () => {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return new Promise(resolve => setTimeout(() => resolve(data), 2000));
  };
  
  const getData = async () => {
    const data = await fetchDataWithDelay();
    console.log('Data received after 2 seconds delay:', data);
  };
  
  getData();
  
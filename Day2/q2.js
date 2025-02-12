// Function to fetch data from the API and log it
const fetchData = () => {
    fetch('https://reqres.in/api/users') 
      .then(response => response.json())  
      .then(data => console.log(data))    
      .catch(error => console.error('Error:', error));  
  };
  
  fetchData();
  
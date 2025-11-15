import axios from 'axios';
import './App.css';

// Function Component
function App() {
  
  // GET
  const handleGetClick = () => {
    //const axios = require('axios');
    axios.get('https://restcountries.com/v3.1/all?fields=name,capital')
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
        console.error('Error', err);
      });
  }

  // POST
    const handlePostClick = () => {
    axios.post('http://localhost:4000/uppercase',{text:"All the power is with me"})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
        console.error('Error', err);
      });
  }

  return (
    <div className="App">
      <button onClick={handleGetClick}>Get Countries</button>
      <button onClick={handlePostClick}>Convert to Uppercase</button>
    </div>
  );
}

export default App;

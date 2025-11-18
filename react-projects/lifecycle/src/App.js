import './App.css';
import { useState, useEffect } from 'react';

// For older version of React
/*
class App externs Component {

  constructor(props){
    console.log('constructor');
    super(props);
    this.state = {count:0};
  }

  handleClick() {
    this.setState({count:this.state.count+1});
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.handleClick.bind(this)}>Click Me></button>
        <br/>{this.state.count}
      </div>
    );
  }
*/

function App() {

  const [count, setCount] = useState(0); // React Hooks (useState)

  // componentDidMount equivalent (runs once when component loads)
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // componentDidUpdate equivalent (runs when 'count' changes)
  useEffect(() => {
    if (count > 0) {
      console.log("componentDidUpdate");
    }
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1); // safer update form
  }

  return (
    <div className="App">
      <button onClick = {handleClick}>Click Me</button>
      <br/>{count}
    </div>
  );
}

export default App;

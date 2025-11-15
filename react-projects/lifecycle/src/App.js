import './App.css';
import { useState } from 'react';

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

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick = {handleClick}>Click Me</button>
      <br/>{count}
    </div>
  );
}

export default App;

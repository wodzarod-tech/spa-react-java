import './App.css';
import { useState, useEffect } from 'react'; // React Hook: are functions (useState, useEffect) for state management

// For older version of React <=16.8 use class Component
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

// Function component
function App() {

  const [count, setCount] = useState(0); // define state, React Hooks (useState)

  /*
  // componentDidMount equivalent (runs once when component loads)
  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  */

  /*
  // componentDidUpdate equivalent (runs when 'count' changes)
  useEffect(() => {
    if (count > 0) {
      console.log("componentDidUpdate");
    }
  }, [count]);
  */

  // useEffect Hook instead of:
  // componentDidMount
  // componentWillMount
  // componentWillUnmount
  // componentDidUpdate
  useEffect(()=>{
    if(count%3===0){
      document.title = count
    }
  })

  /*
  // For class component
  shouldComponenUpdate(props, newState) {
    if(newState.count%3 == 0) {
      return true;
    } else {
      return false;
    }
  }
  */
  /*
  const handleClick = () => {
    setCount(prev => prev + 1); // safer update form
  }*/

  /*
  const handleClick = () => {
        setCount(prev => {
      const next = prev + 1;

      // shouldComponentUpdate equivalent
      if (next % 3 === 0) {
        return next; // allow update
      }

      return prev; // block update (no re-render)
    });
  }
  */

  return (
    <div className="App">
      <button onClick = {()=> setCount(count+1)}>Click Me</button>
      <br/>{count}
    </div>
  );

  /*
  return (
    <div className="App">
      <button onClick = {handleClick}>Click Me</button>
      <br/>{count}
    </div>
  );*/
}

export default App;

import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';


//comment
function App() {
  const element = <h1>Hello, World!</h1>;
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FunctionalComponent/>
      <ClassComponent/>
      {element} 
    </div>
  );
}

export default App;

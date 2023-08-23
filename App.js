import logo from './logo.svg';
import './App.css';
import './component1'
import './component2'
import Hello from './component1';
import Counter from './component2';
import Conditional from './component3';
function App() {
  let todayDate = new Date();
  
  return (
    <>
    <Hello day={todayDate.getDate()} month={todayDate.getMonth()} year={todayDate.getFullYear()}/>
    <Counter/>
    <Conditional/>
    </>
  );
}

export default App;

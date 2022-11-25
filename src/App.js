import './App.css';
import PrintMyName from './component/PrintMyName';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <PrintMyName name="곽건호"></PrintMyName>
        <PrintMyName name="김성호"></PrintMyName>
      </header>
    </div>
  );
}

export default App;

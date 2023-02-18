import './css/App.css';
// import './css/Header.css';
import Main from './components/Main.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      {/* <footer className='App-footer'><h1>hello footer</h1></footer> */}
    </div>
   );
 }

export default App;

import './App.css';
import AndrewData from './components/andrew-data';
import IanData from './components/ian-data';
import JoeData from './components/joe-data';
import Menu from './components/menu';
import About from './components/about'
import Key from './components/key'


function App() {
  return (
    <div className="App">
            <h1>XG Weekly Destiny Checklist</h1>
            <Key/>
      <div className='data_container'>
        <Menu/>

        <AndrewData />
        <IanData />
        <JoeData />
    </div>
      <About/>
    </div>
  );
}

export default App;

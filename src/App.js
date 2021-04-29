import logo from './logo.svg';
import './App.css';
import First from './first';
import Button from './components/button';
import ButtonClass from './buttonclass';
import Monster from './components/Monster';
import EventBinding from './components/event-binding'
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      {/* <First />
      <Button />
      <ButtonClass/> */}
     <Monster/>
{/* <EventBinding/> */}
      
    </div>
  );
}

export default App;


import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='full-pg'>
      <div>
        <Navigation/>
      </div>
      <div>
        <Profile/>
      </div>

    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import TrackForm from './components/TrackForm/TrackForm'

function App() {

  const [songs, setSongs] = useState([]);

  return (
    <div className="App">
      <TrackForm />
    </div>
  );
}

export default App;

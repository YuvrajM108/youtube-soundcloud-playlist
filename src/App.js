import { useState } from 'react';
import './App.css';
import TrackForm from './components/TrackForm/TrackForm'

function App() {

  const [songs, setSongs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <TrackForm handleFunc={handleSubmit} />
    </div>
  );
}

export default App;

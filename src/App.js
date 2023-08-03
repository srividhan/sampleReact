import logo from './logo.svg';
import './App.css';
import Anime  from './components/anime';
import CharacterName from './components/characterName';
import AnimeList from './components/animeList';

function App() {
  return (
    <div className="App">
    <Anime />
    <CharacterName />
    <AnimeList />
    </div>
  );
}

export default App;

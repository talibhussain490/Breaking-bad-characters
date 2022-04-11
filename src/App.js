import Header from "./Header";
import CharacterList from "./CharacterList";
import IndividualCharacter from "./IndividualCharacter";
import Pagination from "./Pagination";
import Search from "./Search";
import Loader from "./Loader";
import DataContext from "./DataContext";
import { useContext } from "react";
import "./App.css";

function App() {
  const { loading, currentCharacters, showIndividual } =
    useContext(DataContext);
  return (
<<<<<<< HEAD
    <>
      <Header />
      <Search />
      {showIndividual ? (
        <IndividualCharacter />
      ) : loading ? (
        <Loader />
      ) : (
        <CharacterList />
      )}
      {currentCharacters.length < 10 ? null : !showIndividual ? (
        <Pagination />
      ) : null}
    </>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer>Learn React
        </a>
      </header>
    </div>
>>>>>>> 6b08a479da970eb91245c4048ee4fddf0f177cd7
  );
}
export default App;

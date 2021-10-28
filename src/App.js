// import logo from './logo.svg';
// import './App.css';
// import { getPokemons } from './utils/fetch/getPokemons';
// import { getPokemonDetail } from './utils/fetch/getPokemonDetail';
// import PokemonCard from './components/PokemonCard';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <PokemonCard />

//       </header>
//     </div>
//   );
// }

// export default App;


import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
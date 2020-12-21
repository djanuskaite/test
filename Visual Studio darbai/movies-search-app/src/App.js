import React, { useState } from 'react'      // "{ useState }" importuojam functional componenta
import axios from 'axios'                      // i terminala "npm i axios". Sitaip gaunam request'a i API

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'        // detales apie paklikinta filma

function App() {
  const [state, setState] = useState({        // creatinam ir setinam state ir duodam default value
    s: "",
    results: [],
    selected: {}                             // empty object related to the movie we clicked on (that's going to pop up)
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {             // kuriam search function
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }


  const handleInput = (e) => {             // vieta, kurioje type'inam, o s=value, search query - tai ka mes irasome i search inputa
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }      // NESUPRANTU
    });
  }

  const openPopup = id => {  // ?????
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }   // selected: {} - pasiselektinam empty object
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}



      </main>
    </div>
  );
}

export default App
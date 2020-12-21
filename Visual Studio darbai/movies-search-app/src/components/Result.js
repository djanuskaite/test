import React from 'react'

// pasidalinam rezultatu sekcija i dvi dalis: title (metai, imdb, zanras ir t..) ir poster (img ir aprasymas)

function Result({ result, openPopup }) {
    return (                                                               //arrow function to get that ID
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
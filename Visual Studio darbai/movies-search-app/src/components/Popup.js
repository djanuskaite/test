import React from 'react'
// "rfce", kad gautume sablona greitesniu budu

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <p className="director">Director: {selected.Director}</p>
                <p className="runtime">Runtime: {selected.Runtime}</p>
                <p className="genre">Genre: {selected.Genre}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup

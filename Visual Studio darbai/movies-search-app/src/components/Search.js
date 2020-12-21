import React from 'react'

function Search({ handleInput, search }) {  // vietoj props (props.handleInput) iskart rasom handle input einam "giliau" ir reikia maziau rasyti
    return (
        <section className="searchbox-wrap">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="searchbox"
                onChange={handleInput}
                onKeyPress={search}    // when we press any key (in our case 'enter') we're going to run this function
            />
        </section>
    )
}

export default Search
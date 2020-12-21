import React, { useState } from 'react'
import axios from 'axios'

const Joke = () => {
    const [joke, setJoke] = useState([])

    const getJoke = () => {
        axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            .then((response) => {
                console.log(response)
                let naujas = response.data
                setJoke(naujas)
            })
    }

    console.log(joke)

    return (
        <div className='container text-center mt-5'>
            <p>{joke.insult}</p>
            <button className='btn btn-outline-primary' onClick={getJoke}>Get a joke...</button>
        </div>
    )
}

export default Joke

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Cats = () => {

    const [posts, setPosts] = useState([])

    const getFacts = () => {
        axios.get('https://cat-fact.herokuapp.com/facts')
            .then((response) => {
                let facts = response.data
                setPosts(facts)
            })
    }
    // UseEffect patikrins ar pasikeite paieskos zodis ir is naujo paleidzia fetch api
    useEffect(() => {
        getFacts()
    }, [])  // tusti skliaustai, kad butu pirminiai duomenis idedami 
    console.log(posts)
    return (
        <div className='container'>
            <div className='list-group list-group-flush text-center mt-5'>
                {
                    posts.map((post, index) => (
                        <p className='list-group-item' key={index}>{post.text}</p> // key indexas kad kiekvienas vaikelis ka mappinam turetu savo unikalu rakta
                    ))
                }
            </div>
        </div>
    )
}

export default Cats

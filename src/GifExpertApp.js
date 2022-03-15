import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    const [Anime, setAnime] = useState(['Tokyo Revenger'])

    // let anime = ['Demon Slayer', 'Tokyo Revenger', 'Dangaropa', 'Naruto', 'Jojo']

    // const handleAdd = () => {
    //     setAnime( an => [...an, 'Soul Eater'] )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setAnimes = { setAnime }/>
            <hr/>
            {/* <button onClick={ handleAdd }>Add Anime</button> */}
            <ol>
                {
                    Anime.map( an => (
                        <GifGrid
                            key={ an } 
                            anime = { an } 
                        />
                        ))
                }
            </ol>
        </>
    )
}

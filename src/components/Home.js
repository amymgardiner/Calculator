import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className='calculator'>
            <div className='calculator--container'>
                <div className='calculator--container_display'>
                    <div className='calculator--container_display-box'></div>
                </div>
            </div>
            <div className='calculator--buttons'></div>
        </div>
    )
}

export default Home
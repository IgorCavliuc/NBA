import React from 'react'
import './NewsBar.css'

import {news} from '../constants'

export function NewsBar() {
    
    const currentNews = news.map((item) =>{
        return(
            <div key={item.id} className="news-container">
            <img className="news-container-img" src={item.logo}></img>
            <p>{item.title}</p>
        </div>
        )

    })
    return(
        <main className="news">
            {currentNews}
        </main>
    )
    
}
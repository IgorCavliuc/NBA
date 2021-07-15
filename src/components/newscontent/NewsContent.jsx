import React from 'react'

import {news} from '../constants';

import './NewsContent.css'

export function NewsContent() {
    const currentNews = news[0]
    return(

        <div className="news-content">
        <img className='content-img' src={currentNews.secondlogo}></img>
        <p className='content-secont_text'>{currentNews.senc}</p>
        <p className='contant-text'>{currentNews.text}</p>
    </div>
    )

}
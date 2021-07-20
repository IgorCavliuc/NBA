import React, {Component} from 'react'


import './NewsContent.css'

export class NewsContent extends Component {

    render(){
        const {data, isOpen} = this.props;
    return(

        <div className="news-content">
        <img className='content-img' src={data[2].logo} width="975px"></img>
        <p className='content-secont_text'>{data[2].senc}</p>
        <p className='contant-text'>{data[2].text}</p>
    </div>
    )
    }

}
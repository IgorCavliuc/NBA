import React, {Component} from 'react'


import './NewsContent.css'

export class NewsContent extends Component {

    render(){
        const {data} = this.props;

        
      

    return(

        <div className="news-content">
        <img className='content-img' src={data.logo} ></img>
        <p className='content-secont_text'>{data.title}</p>
        <p className='contant-text'>{data.text}</p>
    </div>
    )
    }

}
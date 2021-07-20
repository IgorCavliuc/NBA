import React, {Component} from 'react';

import './NewsBarItem.css'
 
export  default class NewsBarItem extends Component {

    state = {
        active: false,
        
    }
    activeNews = () => {
        this.setState((state) => {
            return{
                active: !state.active
            }
        })
      };

      render(){
          const {title, logo, } = this.props;

          const {active} = this.state;

          let classNames = 'news-container';
          
          if (active) {    
              classNames += ' active'
             }
          
          

          return(
            <div  className={classNames}  onClick={this.activeNews}>
            <img className="news-container-img" src={logo}></img>
            <p>{title}</p>
          </div>
          )
      }
}
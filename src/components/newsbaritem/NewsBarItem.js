import React, { Component } from "react";

import "./NewsBarItem.css";

export default class NewsBarItem extends Component {
 
  

  render() {
    const { title, logo,  active, activeListItem } = this.props;


    let classNames = "news-container";

    if (active) {
      classNames += " active";
    }

    return (
      <div className="content" onClick={activeListItem} >
        <div className={classNames} >
          <img
            className="news-container-img"
            src={logo}
          ></img>
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import "./NewsBarItem.css";

export default class NewsBarItem extends Component {
  state = {
    active: false,
  };
  activeNews = () => {
    this.setState((state) => {
      return {
        active: !state.active,
      };
    });
  };

  render() {
    const { title, logo, onActive } = this.props;

    const { active } = this.state;

    let classNames = "news-container";

    if (active) {
      classNames += " active";
    }

    return (
      <div className="content" >
        <div className={classNames} onClick={onActive}>
          <img
            className="news-container-img"
            src={logo}
            onClick={onActive}
          ></img>
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

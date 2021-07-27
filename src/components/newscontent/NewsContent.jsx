import React, { Component } from "react";

import "./NewsContent.css";

import News from '../news/news'

export  class NewsContent extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="news-content">
        <div className="content-img">
          <img width="974" height="370" src={data.logo}></img>
        </div>

        <p className="content-secont_text">{data.title}</p>
        <p className="contant-text">{data.text}</p>
      </div>
    );
  }
}

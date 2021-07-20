import React, { Component } from "react";
import "./App.css";

import { Carousel } from "./components/сarousel/Сarousel";
import { Sidebar } from "./components/sidebar/Sidebar";
import NewsBar from "./components/newsbar/NewsBar";
import { NewsContent } from "./components/newscontent/NewsContent";
import { news } from "./components/constants";

export default class App extends Component {
  state = {
    news,
    newArr: [
     
    ],
  };

  activeItem = (id) => {
    this.setState(({ news }) => {
      const idx = news.findIndex((el) => el.id === id);

      const newAr = news[idx];


      return {
        newArr: newAr,
      };
    });
  };

  render() {
    return (
      <main className="layout">
        <Sidebar />
        <NewsBar data={this.state.news} onActive={this.activeItem} />
        <div className="block-container">
          <Carousel />
          <NewsContent data={this.state.newArr} />
        </div>
      </main>
    );
  }
}

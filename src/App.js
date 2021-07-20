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
    active:true
  };

  deleteItem = (id) => {
    this.setState(({ news }) => {
      const idx = news.findIndex((el) => el.id === id);


      const newArr = [
        ...news.slice(0, idx),
        ...news.slice(idx + 1)];

      return {
        news: newArr,
      };
    });
  };

  activeItem = () => {

  }

  render() {
    return (
      <main className="layout">
        <Sidebar />
        <NewsBar data={this.state.news}  active={this.state.active} onActive={this.activeItem} />
        <div className="block-container">
          <Carousel />
          <NewsContent data={news} />
        </div>
      </main>
    );
  }
}

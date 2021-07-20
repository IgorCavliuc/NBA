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
    newItem:{
      id: 1,
      title: "Luka Doncic is the best NBA player ever ever ever and you can’t beat it ",
      logo: "./images/image 2.png",
      text: "Mexico was treated to a historic farewell on Saturday thanks to the country’s first ever overtime thriller that capped off the 2019 NBA Mexico City Games. Kelly Oubre’s 3-pointer tied the score at the end of regulation, then Patty Mills topped it with his game-winning jumper with 0.3 seconds left in the extra period to give San Antonio the victory. Here’s a look at the most memorable sights and moments from the league’s 30th regular season game in Mexico City. Phoenix was technically the home team, but the crowd threw its support and opposition toward with equal gusto. That meant both teams were drowned in boos and whistles at the free throw line and cheered to the rafters for highlights and game-swinging plays.The game itself fed that fervor, with the Suns storming back in the final two minutes of regulation and the Spurs doing likewise in the final 30 seconds of overtime. Each answering bucket or fatal gaffe drew a response that was postseason worthy, which only bodes well for the city’s own that will debut next season.",
      secondlogo: "./images/image 2.png",
    }
  };

  activeItem = (id) => {
    this.setState(() => {
      const idx = news.findIndex((el) => el.id === id);

      return {
        newItem: news[idx],
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
          <NewsContent data={this.state.newItem} />
        </div>
      </main>
    );
  }
}

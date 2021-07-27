import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import { Sidebar } from "./components/sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

import { news } from "./components/constants";

import Players from "./components/players/players";
import News from "./components/news/news";

export default class App extends Component {
  state = {
    news,
  };

 

  render() {
    return (
      <BrowserRouter>
        <main className="layout">
          <Sidebar />
          <div className="block-container">
          <Route path="/news" component={News}></Route>
          <Route path="/players" component={Players}></Route>
          <Footer />
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

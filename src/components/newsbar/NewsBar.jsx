import React, {Component} from "react";
import NewsBarItem from "../newsbaritem/NewsBarItem";

import "./NewsBar.css";

export default class NewsBar extends Component {

  state={
    openAcrticleId: null,

  }

  render(){
    const { data, onActive, active } = this.props;
  const el = data.map((item) => {
    const { id, ...itemProps } = item;
    
    return (
      <li className='news' key={id}>
        <NewsBarItem {...itemProps} isOpen={this.state.openAcrticleId === id} onActive={() => onActive(active)}/>
      </li>
    );
  });

  return <ul className="news">{el}</ul>;

}
}


import React from "react";
import NewsBarItem from "../newsbaritem/NewsBarItem";

import "./NewsBar.css";

function NewsBar({ data, onActive }) {
  const el = data.map((item) => {
    const { id, ...itemProps } = item;
    
    return (
      <li  key={id}>
        <NewsBarItem {...itemProps} onActive={() => onActive( id)}/>
      </li>
    );
  });

  return <ul className="news">{el}</ul>;
}

export default NewsBar;

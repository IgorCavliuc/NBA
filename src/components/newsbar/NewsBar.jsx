import React from "react";
import NewsBarItem from "../newsbaritem/NewsBarItem";

import "./NewsBar.css";

function NewsBar({ data,  activeListItem}) {
  
  const el = data.map((item) => {
    const { id, ...itemProps } = item;
    
    return (
      <li  key={id}>
        <NewsBarItem 
        {...itemProps}
        activeListItem={() => activeListItem(id)}  
        />
      </li>
    );
  });

  return <ul className="news">{el}</ul>;
}

export default NewsBar;

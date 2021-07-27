import React from "react";
import { NavLink } from "react-router-dom";

import { MainLogo } from "../svgs/MainLogo";
import "./SideBar.css";

export const Sidebar=()=>{
  return (
    <aside className="sidebar">
      <div>
        <div className="menu-section">
          <div>
            <a href="/">
              <MainLogo width="96px" height="171px" />
            </a>
          </div>

          <span className="divider" />

          <nav className="menu">
            <div className="menu-links">
              <NavLink to="/news" className="link" activeClassName="link active">News</NavLink>
              <NavLink to="/players" className="link" activeClassName="link active">Players</NavLink>
              <NavLink to="/teams" className="link" activeClassName="link active">Teams</NavLink>
              <NavLink to="/watch" className="link" activeClassName="link active">Watch</NavLink>
              <NavLink to="/playoffs" className="link" activeClassName="link active">Playoffs</NavLink>
              <NavLink to="/stats" className="link" activeClassName="link active">Stats</NavLink>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <span className="divider" />
        <div>
          <nav className="menu">
            <ul className="menu-links">
              <li>
                <NavLink to="/instagram" activeClassName="link active">Instagram</NavLink>
              </li>
              <li>
                <NavLink to="/twiter" activeClassName="link active">Twiter</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <span className="divider" />

        <p className="copyright">Copyright © 2019 NBA</p>
      </div>
    </aside>
  );
}

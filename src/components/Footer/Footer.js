import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <div className="footer-nav-items">
            <ul className="nav-items">
              <p>NBA Organization</p>
              <li className="nav-item">
                <a href="#">NBA Official</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">NBA Careers</a>{" "}
              </li>
            </ul>

            <ul className="nav-items">
              <p>NBA Initiavies</p>
              <li className="nav-item">
                <a href="#">NBA Cares</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">Jr. NBA</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">NBA Voices</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">Jr. FIT</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">Hoops for Troops</a>{" "}
              </li>
            </ul>

            <ul className="nav-items">
              <p>Across The League</p>
              <li className="nav-item">
                <a href="#">NBA Communication</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">Lockervision</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">NBA Transactions</a>{" "}
              </li>
            </ul>

            <ul className="nav-items">
              <p>Shop</p>
              <li className="nav-item">
                <a href="#">Global Stories</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">NYC Store</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">NBA Auctions</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">NBA Photostore</a>{" "}
              </li>
            </ul>
          </div>

          <div className="footer-subscription">
            <ul className="nav-items">
              <p>Subscription</p>
              <li className="nav-item">
                <a href="#">NBA TV</a>{" "}
              </li>
              <li className="nav-item">
                <a href="#">League Pass</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-info-item">
            <p>© 2021 NBA Media Ventures, LLC. All rights reserved.</p>
            <ul className="footer-link">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Accessibility and Closed Captions</a>
              </li>
              <li>
                <a href="#">Do Not Sell My Personal Information</a>
              </li>
              <li>
                <a href="#">Custems Support</a>
              </li>
              <li>
                <a href="#">Manage Cookies</a>
              </li>
            </ul>
            <p>
              If you are having difficulty accessing any content on this
              website, please visit our Accessibility page.
            </p>
            <p>
              NBA.com is part of Warner Media, LLC’s Turner Sports &
              Entertainment Digital Network
            </p>
            <h2 className="footer-logo">
              <span>Warner</span>Media
            </h2>
          </div>
          <div className="footer-info-social"></div>
        </div>
      </div>
    </div>
  );
}

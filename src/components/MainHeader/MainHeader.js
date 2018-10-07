import React from "react";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="main-header">
      <h1>TweetDeck Clone</h1>
      <p>
        by{" "}
        <a className="App-link" href="https://github.com/azdravkovski">
          Aleksandar Zdravkovski
        </a>
      </p>
    </header>
  );
};

export default MainHeader;

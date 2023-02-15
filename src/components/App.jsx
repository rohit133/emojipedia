import React from "react";
import emojipedia from "../emojipedia";
import createEmojiCard from "./createEmojiCard";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary ">{emojipedia.map(createEmojiCard)}</dl>
      <Footer />
    </div>

  );
}

export default App;

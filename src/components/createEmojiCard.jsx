import React from "react";
import Entry from "./Entry";

function createEmojiCard(emojis) {
  return (
  
    <Entry
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

export default createEmojiCard;

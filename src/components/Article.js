import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const generateEmojis = (minutes) => {
    let emoji = minutes < 30 ? "☕️" : "🍱";
    let repeatCount =
      minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    return emoji.repeat(repeatCount);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {generateEmojis(minutes)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

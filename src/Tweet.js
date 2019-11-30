import React from 'react';
import './App.css';  // Styles must be imported as well

// This is a Tweet component
export default function Tweet({ name, content="Default Content" }) {
  return (
      <div className="tweet">
          <strong>{name}</strong>
          <br/>
          <p>{content}</p>
      </div>
  );
}

// We could also have the following:
// export default Tweet;
// and only have function Tweet() above

// Tweet({ name, content="Default Content" })
// is an example of deconstructing (extracting) values from props.
// Instead of having a props variable and {props.name} and {props.content}
// we do {name, content}
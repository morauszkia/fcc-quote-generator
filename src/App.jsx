import { useState, useEffect } from 'react';

import { LogoTwitter } from 'react-ionicons';

import './App.css';

const App = () => {
  const [text, setText] = useState('Your quote is loading');
  const [author, setAuthor] = useState('');

  const getRandomQuote = async function () {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const quote = await res.json();
      setText(quote.content);
      setAuthor(quote.author);
    } catch (error) {
      console.log(`Something went wrong: {error}`);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div id="quote-box">
      <h1>Get your quote!</h1>
      <div id="text">{text}</div>
      <div id="author">{author}</div>
      <button id="new-quote" onClick={getRandomQuote}>
        New Quote
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        data-text={`${text} ${author}`}
      >
        <LogoTwitter color="#1DA1F2" height="30px" width="30px" />
      </a>
    </div>
  );
};

export default App;

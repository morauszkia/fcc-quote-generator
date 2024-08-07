import { useState, useEffect } from "react";

import { GetQuoteButton, QuoteBoxDiv, QuoteBoxTitle } from "./QuoteBox.styles";
import { LogoTwitter } from "react-ionicons";
import Quote from "../Quote/Quote.component";
import SocialLink from "../SocialLink/SocialLink.component";

const QuoteBox = () => {
  const [text, setText] = useState("Your quote is loading");
  const [author, setAuthor] = useState("");

  const getRandomQuote = async function () {
    try {
      const res = await fetch("https://api.quotable.io/quotes/random");
      const [quote] = await res.json();
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
    <QuoteBoxDiv id="quote-box">
      <QuoteBoxTitle>Get your quote!</QuoteBoxTitle>
      <Quote text={text} author={author} />
      <GetQuoteButton id="new-quote" onClick={getRandomQuote}>
        New Quote
      </GetQuoteButton>
      <SocialLink
        href={`https://twitter.com/intent/tweet?text=${text}%20(${author})`}
        target="_blank"
        id="tweet-quote"
        data-text={`${text} ${author}`}
      >
        <LogoTwitter color="#1DA1F2" height="30px" width="30px" />
      </SocialLink>
    </QuoteBoxDiv>
  );
};

export default QuoteBox;

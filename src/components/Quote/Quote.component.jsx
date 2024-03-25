import { Author, QuoteText } from './Quote.styles';

const Quote = (props) => {
  const { text, author } = props;
  return (
    <figure>
      <QuoteText id="text">{text}</QuoteText>
      <Author id="author">{author}</Author>
    </figure>
  );
};

export default Quote;

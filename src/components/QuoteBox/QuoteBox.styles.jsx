import styled from 'styled-components';

export const QuoteBoxDiv = styled.main`
  width: 800px;
  height: 450px;
  max-width: 90vw;
  padding: 40px 60px;
  background-color: #fff;
  color: #0f2027;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0;
`;

export const QuoteBoxTitle = styled.h1`
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const GetQuoteButton = styled.button`
  font-family: inherit;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 200;
  border: none;
  cursor: pointer;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 12px 36px;
  border-radius: 5px;
  display: block;
  margin: 50px auto 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in;

  &:hover {
    scale: 1.05;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.18);
  }
`;

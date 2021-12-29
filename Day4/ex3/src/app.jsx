import React from 'react';
import styled, {ThemeProvider, css } from 'styled-components';
import './app.css';
import Button from './components/button'

const ButtonBlock = styled.div`
  width:500px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem
`;

function App() {
    return (
      <ThemeProvider theme={{
        palette: {
          pink: '#f783ac',
          gray: '#ced4da',
          blue: '#4dabf7'
        }
      }}>
        <ButtonBlock>
          <Button size="large">버튼</Button>
          <Button size="large" color="gray">버튼</Button>
          <Button size="large" color="blue">버튼</Button>
        </ButtonBlock>

        <ButtonBlock>
          <Button size="large">버튼</Button>
          <Button size="medium" color="gray">버튼</Button>
          <Button size="small" color="blue">버튼</Button>
        </ButtonBlock>
      </ThemeProvider>
    );
}

export default App;

import React from 'react';
import Wrapper from "./componets/Wrapper";
import Screen from "./componets/Screen";
import ButtonBox from "./componets/ButtonBox";
import Button from "./componets/Button";
import './App.css';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  return (
    <div>
      <header>
        <Wrapper>
          <Screen/>
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button value = {btn} key= {i}></Button>
            ))}
          </ButtonBox>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;

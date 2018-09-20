import React, { Component } from "react";
import styled, { injectGlobal, keyframes } from "styled-components";

injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Hello</Button>
        <Button danger rotationTime={5}>Hello</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${props => {
    if (props.danger) {
      return `animation: ${rotate} ${props.rotationTime}s linear infinite`
    }
  }}
`;

//Button 컴포넌트를 똑같은 css를 적용하면서 다른 태그로 변경할 수도 있음
const Anchor = Button.withComponent("a").extend`
  text-decoration:none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`

export default App;
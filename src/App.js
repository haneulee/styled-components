import React, { Component } from "react";
import styled, { injectGlobal, keyframes, css, ThemeProvider } from "styled-components";
import theme from "./theme";

injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0,0,0,0.88);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard}
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          {/* <Button>Hello</Button>
          <Button danger rotationTime={5}>Hello</Button>
          <Anchor href="http://google.com">Go to google</Anchor>
          <Input placeholder="hello"/> */}
          <Form/>
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
)

const Card = styled.div`
  background-color: ${props => props.theme.dangerColor};
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: blue;
  }
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
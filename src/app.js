/* @jsx createElement */

// 파일 최상단에 @jsx 주석을 사용하면 babel안에 포함되어 있는 React JSX Transpiler가 옵션을 입력받음
// default 값은 React.createElement임
import { render, createElement, Component } from "./react";

/* JSX문법은 내부적으로 이렇게 작동함 */
// const virtualDom = createElement(
//   "p",
//   {},
//   createElement("h1", {}, "React 만들기"),
//   createElement(
//     "ul",
//     {},
//     createElement("li", { style: "color:red" }, "첫 번째 아이템"),
//     createElement("li", { style: "color:blue" }, "두 번째 아이템"),
//     createElement("li", { style: "color:green" }, "세 번째 아이템")
//   )
// );

class Title extends Component {
  render() {
    const { children } = this.props;
    return <h1>{children}</h1>;
  }
}

// JSX에 표현되는 모든 함수(컴포넌트는) 무조건 대문자로 시작하야함. 대문자가 아닌 경우 javascript 값이 아닌 일반 문자열로 취급하기 때문
const Item = (props) => {
  return <li style={`color:${props.color}`}>{props.children}</li>;
};

const App = () => (
  <p>
    <Title label="React">React 만들어보기</Title>
    <ul>
      <Item color="red">첫 번째 아이템</Item>
      <Item color="blue">두 번째 아이템</Item>
      <Item color="green">세 번째 아이템</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector("#root"));

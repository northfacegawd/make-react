/* @jsx createElement */

// 파일 최상단에 @jsx 주석을 사용하면 babel안에 포함되어 있는 React JSX Transpiler가 옵션을 입력받음
// default 값은 React.createElement임
import { render, createElement } from "./react";

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

const virtualDom = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color:red">첫 번째 아이템</li>
      <li style="color:blue">두 번째 아이템</li>
      <li style="color:green">세 번째 아이템</li>
    </ul>
  </p>
);

render(virtualDom, document.querySelector("#root"));

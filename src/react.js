/**
 *
 * @param {object} node 돔으로 변환할 객체
 * @returns {HTMLElement | Text} 생성된 돔
 * @description 돔을 생성하여 리턴하는 함수
 */
export function createDOM(node) {
  // 인수로 받은 node가 문자열인 경우 문자열 돔을 생성해서 리턴
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // 전달받은 인수의 태그명으로 돔을 생성
  const element = document.createElement(node.tag);

  // prop 전달
  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  // 객체가 children을 갖고 children내의 각 객체가 children을 가질 수 있는 구조이므로 재귀함수를 통해 호출
  // forEach callback 함수 내에서 appendChild를 실행시키지 않고 콜백함수로 넘겼기 때문에 context가 달라짐.
  // 이 경우에는 bind를 사용해서 다시 context를 변경해주어야함
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

/**
 *
 * @param {string} tag html 태그명
 * @param {object} props 돔에 설정할 attribute 를 객체료 표현한 값
 * @param  {...any} children 자식 객체들
 * @description 가상 돔을 만드는 함수
 */
export function createElement(tag, props, ...children) {
  return {
    tag,
    props,
    children,
  };
}

/**
 *
 * @param {any} virtualDom 가상돔
 * @param {HTMLElement} container 돔으로 변환할 객체를 렌더링할 위치(컨테이너)
 * @description 가상 돔을 입력받아서 렌더링하는 함수
 */
export function render(virtualDom, container) {
  container.appendChild(createDOM(virtualDom));
}

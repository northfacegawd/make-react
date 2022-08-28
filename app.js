// 객체를 DOM으로

function createDOM(node) {
  // 인수로 받은 node가 문자열인 경우 문자열 돔을 생성해서 리턴
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // 전달받은 인수의 태그명으로 돔을 생성
  const element = document.createElement(node.tag);

  // 객체가 children을 갖고 children내의 각 객체가 children을 가질 수 있는 구조이므로 재귀함수를 통해 호출
  // forEach callback 함수 내에서 appendChild를 실행시키지 않고 콜백함수로 넘겼기 때문에 context가 달라짐.
  // 이 경우에는 bind를 사용해서 다시 context를 변경해주어야함
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

const node = {
  tag: "p",
  props: {},
  children: [
    { tag: "h1", props: {}, children: ["React 만들어보기"] },
    {
      tag: "ul",
      props: {},
      children: [
        { tag: "li", props: {}, children: ["첫 번째 아이템"] },
        { tag: "li", props: {}, children: ["두 번째 아이템"] },
        { tag: "li", props: {}, children: ["세 번째 아이템"] },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(node));
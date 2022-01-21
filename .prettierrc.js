// 주석을 넣기위해서 json 파일이 아닌 js 파일로 세팅파일을 설정했습니다.
// 설정을 한눈에 보기쉽게 하여 모든 포맷팅 관련 설정 및 간단한 설명을 기입했고
// default value를 그대로 사용하는 경우는 주석처리 했습니다.
module.exports = {
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  // tabWidth: 2, // indent 2칸
  // useTabs: false, // tab 대신 space로 공백 표시
  // semi: true, // 항상 semiconlon 삽입
  singleQuote: true, // "" => ''
  // quoteProps: "as-needed",  // object key에서 필요한 경우에만 quote 삽입
  // jsxSingleQuote: "false", // JSX의 경우 double quote 사용
  // trailingComma: "es5", // object의 제일 마지막 property 뒤에도 comma 삽입
  // bracketSpacing: true, // object bracket 사이에 공백 부여 { foo: bar }
  // bracketSameLine: false, // tag들 닫는 괄호 속성 다음줄에 삽입
  arrowParens: "avoid", // arrow function parameter가 하나일 경우 괄호 생략
  // proseWrap: "preserve", // markdown file은 포맷안함
  // endOfLine: "lf", // 줄바꿈 lf로 표현(Linux, mac 기본 값)
};

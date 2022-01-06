// eslint에서 console.log는 warning만 출력하기 때문에 eslint에서 pass 해줍니다.
// warning도 허용하고 싶지 않다면 package.json에서 lint-staged안의 eslint 명령어를 eslint --max-warnings=0 으로 변경하면
// warning이 하나라도 출력되면 eslint에서 패스하지 못합니다.
// package.strict-sample.json 파일 참고
console.log('eslint warning');

// 주석 풀면 eslint no-unused-var 룰에 걸려서 commit을 못합니다.
// const unusedVar = 'eslint error'

const sum = (x, y) => x + y;

module.exports = { sum };

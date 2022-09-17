import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MyComponents1 from './MyComponent';
/*rcc 를 치면 class형 컴포넌트가 자동완성되고 ,rsc쓰면 function형 컴포넌트가 자동완성된다. */
/*
Class형 컴포넌트형과 Function 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을
사용할수있다는 것과 임의 메서드를 정의할수 있다는 것이다.

함수컴포넌트 장점 : class형 컴포넌트보다 선언하기가 훨씬 쉬움, 메모리 자원도 클래스형 컴포넌트 보다 덜 사용함.
또한 프젝완성해서 빌드 후 배포할때도 function 컴포넌트를 사용하는것이 결과물의 파일 크기가 더작음.

function 컴포넌트의 주요 단점은 state 라이플사이클의 API사용이 불가능하다는 점인데, 이건 v16.8이후 Hooks 기능 도입후 해결됨.
완전히는 똑같이안되지만 조금 다른방식으로 비슷한 작업가능.
*/
const a = "Hello!";
class App extends Component {
  
  render() {
    return (
          <MyComponents1 
          // name={3} 
          favoriteNumber={44444}
          >리엑트</MyComponents1>
    );
  }
}

export default App;
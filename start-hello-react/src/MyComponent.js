import React from 'react';
import {fromEvent} from 'rxjs'; //아직은 RxJs는 쓸때가 아닌거같다.
//children으로 내가 <> </>부른 컴포넌트 사이에값에 넣은걸 꺼낼수있따.

//그리고 props는 이름 바꿔도 상관없는거같다. 
const MyComponent = ({name,children}) => {

    return (
        <div className="react">
            나의 새롭고 멋진 {name ?? "안녕"}
            {children}
        </div>
    );

};

//이걸로 defaultProps를 기본 default로 적힌걸 다른값으로 설정할수있다
MyComponent.defaultProps = {
    name : ' 기본이름 '
}

export default MyComponent;
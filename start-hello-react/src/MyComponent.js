import React from 'react';
import {fromEvent} from 'rxjs'; //아직은 RxJs는 쓸때가 아닌거같다.
//children으로 내가 <> </>부른 컴포넌트 사이에값에 넣은걸 꺼낼수있따.
import PropTypes from 'prop-types'; //props를 통해 props의 타입 지정가능

//그리고 props는 이름 바꿔도 상관없는거같다. 
const MyComponent = (props) => {
    const {name , children,favoriteNumber} = props;
    return (
        <div className="react">
            나의 새롭고 멋진 {name ?? "안녕"}
            {children}
            <br/>
            필수값 : {favoriteNumber}
        </div>
    );

};

//이걸로 defaultProps를 기본 default로 적힌걸 다른값으로 설정할수있다
MyComponent.defaultProps = {
    name : ' 기본이름 '
}
//MyComponent.propTypes 자체는 import안해도 상관없다
MyComponent.propTypes = {
    name : PropTypes.string, //문자열로 안하면 경고창뜸 log에서
    favoriteNumber : PropTypes.number.isRequired //필수 propTypes에 숫자형을 필수로함

};

export default MyComponent;
import React from 'react';
import propsType from 'prop-types'; //propsType 검증 및 지정가능 , 소문자로 시작해야 에러안터짐.. 이유는 모르겠음
//파리미터 순서는 바꿔도 상관없지만 변수명은 children으로 꼭 해야하는듯함.
//객체에서 값을 추추랗는 문법을 비구조화 할당이라함.
const MyComponentStart = ({name , children,favoriteNumber}) => {
    return (
       <>
        안녕하세요. 제이름은 <b>{name}</b> <br/>
        children 값은 <b>{children}</b>
        <br/>
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
       </>
    );
};

// MyComponentStart.defaultProps = {
//     name : '오하요'
// }
//이렇게 하면 name은 무조껀 String형태로 된다는뜻임. string말고 따른거 하면 console에서 에러터진다는데 안터짐 ㅋ 시발
MyComponentStart.propsType = {
    name : propsType.string,
    favoriteNumber : propsType.number.isRequired //propType을 지정하지 않았을 때 경고메시지를 뛰우는 작업이라는데 딱히 안됨
}

export default MyComponentStart;
// const MyComponentStart = (props) => {
//     return (<>

//         <h1>나의 새롭고 멋진 컴포넌트</h1>
//         <h1>이름 : {props.name}</h1>
//         <h1>children 값은 {props.children}</h1>
//     </>);
// };

// MyComponentStart.defaultProps = {
//     name : `기본이름`
// }
// export default MyComponentStart;
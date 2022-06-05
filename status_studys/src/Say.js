import React,{useState} from 'react';
/*useState 함수의 인자에는 상태의 초깃값을 넣어준다.
클래스형 컴포넌트에서의 state초깃값은 객체형태를 넣어주어야한다고 배웟는데,
useState에서는 반드시 객체가 아니어도 상관없다, 값의 형태는 자유이다, 숫자일수도, 문자열일수도 배열잇수도 잇다.

함수를 호출하면 배열이 반환되는데, 첫번째 원소는 현재상태이고, 두번째는 원소는 상태를 바꾸어주는 함수이다. (Setter)
글고 text,랑 setText는 니맘대로 바꿔도됨 
글고 useState는 여러번 사용해도 괜찮 ㅎ*/
const Say = () => {
    const [message,setMessage] = useState('');
    console.log('useState = ',useState);
    console.log('message = ',message);

    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히가세요!');

    const [color,setColor] = useState('black'); //useState를 한번더 사용!
    return (
        <div>
            <button style={{color : 'red'}} onClick={()=>setColor('red')}>색깔변경(Red)</button>
            <button style={{color : 'green'}} onClick={()=>setColor('green')}>색깔변경(green)</button>
            <button style={{color : 'blue'}} onClick={()=>setColor('blue')}>색깔변경(blue)</button>
            <button style={{color : 'black'}} onClick={()=>{setColor('black')}}>원복(black)</button>
            <br/><br/>

            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>

            <h1 style={{color}}>{message}</h1>
        </div>
    );
};

export default Say;
import React, { Component } from 'react';

class Counter extends Component {
    //두번째 방법은 이런식으로 다이렉트로도 가능하다
    state = {   
        number : 0,
        fixedNumber : 0
    }

    /*첫번째 방법으로 state의 초깃값을 지정하는방법 1 */
    // constructor(props){

    //     super(props);

    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     }
    // }

    render() {
        console.log(this);
        const {number , fixedNumber} = this.state;

        return (
            <div>
                현재값 : <b>{number} </b><br/>
                10일때마다 증가 : {fixedNumber}<br/>
                <button onClick={()=>{
                    //밑에꺼 두개해봤자 값은 1씩오른다
                    this.setState(preState2 => {
                        console.log('preState2 = ',preState2);
                        return{
                 
                            number : preState2.number + 1
                        }
                    });
                    //()를 씌워서 즉시리턴 시킴
                    this.setState(prevState => ({
                        number : prevState.number + 1
                    }));
                    //이게 들어가버리면 바로 다시 1씩오름
                    this.setState({number : number + 1 })

                    if(number % 10 == 0 && number != 0){
                        this.setState({fixedNumber : fixedNumber +1})
                    }
                    }}>+1 증가</button>
            </div>
        );
    }
}


   
export default Counter;
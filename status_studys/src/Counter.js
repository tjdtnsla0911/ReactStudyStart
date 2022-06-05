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
        console.log('this = ',this);
        const {number , fixedNumber} = this.state;

        return (
            <div>
                현재값 : <b>{number} </b><br/>
                10일때마다 증가 : {fixedNumber}<br/>

                <button onClick={()=>{
                    console.log('호출@@@@');
                    this.setState({
                        number : number + 1
                    }, ()=> { console.log('setState 호출'); console.log('this.stats = ',this.state);});

                      if(number % 10 === 0 && number !== 0){
                         this.setState({fixedNumber : fixedNumber +1})
                    }
                    
                }}>+1 증가</button>
            </div>
        );
    }
}


   
export default Counter;
import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';

const reducer = (state, action) =>{
    switch(action.type){
        case 'one':
            return state+'1'
        case 'two':
            return state+'2'
        case 'three':
            return state+'3'
        case 'four':
            return state+'4'
        case 'five':
            return state+'5'
        case 'six':
            return state+'6'
        default:
            return state
    }
}

function Keypad () {
    const [code, dispatch] = useReducer(reducer,[]);
    const lockCode = 123456;

    const access = () => {
        if (code === lockCode)
            return 'granted'
        };

    return (
        <div>
            Code entry: {code}
            <div>
                <button onClick={()=>dispatch({type: 'one'})} value='1' >1</button>
                <button onClick={()=>dispatch({type: 'two'})} value='2' >2</button>
                <button onClick={()=>dispatch({type: 'three'})}value='3' >3</button>
                <button onClick={()=>dispatch({type: 'four'})} value='4' >4</button>
                <button onClick={()=>dispatch({type: 'five'})} value='5' >5</button>
                <button onClick={()=>dispatch({type: 'six'})} value='6' >6</button>
            </div>
            Access: {access}
        </div>
    );
};

ReactDOM.render(
    <Keypad />,
    document.querySelector('#root')
);
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const lightLevel = ['off','low','med','high']
let i = 0

const reducer = (state, action)  => {
    switch( action.type) {
        case 'change':
            i ++
            if (i >3){i=0}
            console.log(i)
            return lightLevel[i]
        case 'off':
            i = 0
            return lightLevel[0];
        default:
            return state;
    }
};

function Room () {
    const [light, dispatch] = useReducer(reducer,lightLevel[i])

    return(
        <div>
            <h1>Light is set to: {light}</h1>
            <button onClick={() =>dispatch({ type: 'change' })}>Level Change</button>
            <button onClick={() =>dispatch({ type: 'off' })}>Lights Out</button>
        </div>
    );
};

ReactDOM.render(
    <>
    <Room />
    </>,
    document.querySelector('#root')
);
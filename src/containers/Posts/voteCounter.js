import React, { useState } from 'react';

function Counter(Props) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    function increment1() {
        setCount1(count1 + 1)
    }

    function increment2() {
        setCount2(count2 + 1)
    }

    /*function decrement() {
        setCount(count - 1)
    }*/
    return (
        <div>
            <button onClick={increment1}>Up Vote</button><p>{count1}</p>
            <br />
            <button onClick={increment2}>Down Vote</button><p>{count2}</p>
            <br />
            <p>{Props.appState}</p>




        </div>
    );
}

export default Counter;
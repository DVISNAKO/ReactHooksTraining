import React, { useEffect, useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [random, setRandom] = useState(0);


// Функция с передаваемым числом
    const changeCount = (i) => {
        setCount(count => count + i)
    }

    const Ran = () => {

        const randomNum = Math.floor(Math.random() * 100);
        setRandom(randomNum)
    }

    useEffect(() => {
        document.title = `counter: ${count}`
        console.log('effect')
    }, [count])

    return (
        <div style={{marginTop: 10, padding:10}}>
            <div style={{fontSize: 16}}>Count:{count}</div>
            <div style={{fontSize: 16}}>Random:{random}</div>

            <button onClick={() => changeCount(1)}>Inc</button>
            <button onClick={() => changeCount(-1)}>Dec</button>
            <button onClick={Ran}>Random</button>
        </div>
    );
};

export default Counter;
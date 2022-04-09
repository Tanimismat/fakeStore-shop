import React, { useState } from 'react';

const Test = (props) => {
    // console.log(count)

    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        if (count <= 0) {
            setCount(count)
        }
        else {
            setCount(count - 1)
        }

    }

    console.log(count)

    return (
        <div>
            <div className="count mt-5">
                <h1>{count}</h1>
                <button onClick={plus} className='m-2'>+</button>
                <button onClick={minus}>-</button>
            </div>
        </div>
    );
};

export default Test; 
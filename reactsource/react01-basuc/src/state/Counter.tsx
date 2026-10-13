import { useState } from "react";

const Counter = () => {

    // 함수
    // let count = 0; *사용불가*
    // set* 함수 : 변수값을 변경하는데 사용, 화면을 리페인팅
    const [count, setCount]=useState(0)
    // const increase = (e) => {
    //     setCount(count + 1)
    //     console.log(count)
    // };
    // const decrease = (e) => {
    //     setCount(count - 1)
    //     console.log(count)
    // }; 

    const  increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    return (
        <div>
             <h1>{count}</h1>
            <button type="button" className="increase" onClick={increase}>+</button>
            {/* <button type="button" className="increase" onClick={() => setCount(count + 1)}>+</button> */}
            <button type="button" className="decrease" onClick={decrease}>-</button>
        </div>
    );
};

export default Counter;
import { useState } from "react";

const InputMultipleSample = () => {
    // input 여러개를 하나의 state 로 관리

    const [inputs, setInputs]=useState({
        name:"",
        nickname:"",
    })

    // 구조 분해 (객체 : [대괄호] , 오브젝트 : {중괄호})
    const {name, nickname} = inputs    

    const handleChange= (e) => {
        // 이벤트 대상 지정
        const { name, value } = e.target

        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const onReset = () => {
         setInputs({
           name: "",
           nickname:"",
        })
    } 

    return (
        <div>
            <input type="text" name="name" onChange={handleChange} value={name}/>
            <input type="text" name="nickname" onChange={handleChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <h2>현재값 : {name}{nickname}</h2>
        </div>
    );
};

export default InputMultipleSample;
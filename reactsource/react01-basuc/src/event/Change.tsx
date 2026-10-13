import { useState } from "react";


const Change = () => {

    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")
    const reset = () => {
        setMessage("")
        setUsername("")
    }


    return (
        <div>
            <h1>Change 이벤트</h1>
            <input type="text" name="message" placeholder="메세지" className="border" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            {/* <button onClick={()=>setMessage("")}>초기화</button> */}
            <input type="text" name="username" placeholder="이름" className="border" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <button onClick={reset}>초기화</button>
            <button onClick={()=>alert(`${username} : ${message}`)}>확인</button>
        </div>

    );
};

export default Change;
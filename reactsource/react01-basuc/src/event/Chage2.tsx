import { useState } from "react";


const Change2 = () => {

    const [user, setUser] = useState({
        username : "",
        message : "",
    })
    
    const {username, message} = user

    const onChange = (e) => {
        // 어느 input 에서 발생한 이벤트인가?
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value,
        })
    }

    const reset = () => {
        setUser({
            username: "",
            message: "",
        })
    }


    return (
        <div>
            <h1>Change 이벤트</h1>
            <input type="text" name="message" placeholder="메세지" className="border" value={message} onChange={onChange}/>
            {/* <button onClick={()=>setMessage("")}>초기화</button> */}
            <input type="text" name="username" placeholder="이름" className="border" value={username} onChange={onChange}/>
            <button onClick={()=>{reset}}>초기화</button>
            <button onClick={()=>alert(`${username} : ${message}`)}>확인</button>
        </div>

    );
};

export default Change2;
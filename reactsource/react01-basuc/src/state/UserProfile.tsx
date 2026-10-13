// Profile 의 부모
// 기본 : 부모가 렌더링 되면 자식도 렌더 됨 
//        자식 컴포넌트의 state 값이 변경이 되면 자식 컴포넌트만 리렌더링
// 부모가 렌더링 될때 자식의 컴포넌트에 영향을 끼치지 않는다면 자식의 렌더링 막는게 효율적 => React.Memo()

import { useState } from "react";
import Profile from "./Profile";

const UserProfile = () => {
    const users = ["Alice","Bob","Clark"]
    const [user,setUser] = useState(users[0])
    const [status,setStatus] = useState(true)

    console.log('UserProfile Rendered')

    return (
        <>
            <div>
                <h2>User Profile</h2>
                <button onClick={() => setStatus(!status)}>Toggle Status</button>
                <button onClick={() => setUser(users[(users.indexOf(user) +1 ) % users.length])}>Switch Status</button>
                <p>{status ? 'Active' : 'Inactive'}</p>
            </div>
            <Profile name={user}/>
        </>
    );
};


export default UserProfile;
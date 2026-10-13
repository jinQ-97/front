// UserProfile 의 부모

import { useState } from "react";

const Profile = ({name}) => {

    const [status,setStatus] = useState("Available")
    

    console.log('UserProfile Rendered')
    return (
        <div>
            <h3>Name : {name} </h3>
            <p>status : {status}</p>
            <button onClick={()=>setStatus("Away")}>Set Away</button>
            <button onClick={()=>setStatus("Available")}>Set Available</button>
        </div>
    );
};

export default Profile;
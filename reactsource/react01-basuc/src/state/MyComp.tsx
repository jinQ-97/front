import { useState } from "react";
import TopComp from "./TopComp";

const MyComp = () => {

    const [myData, setMyData] = useState({
        frontData : ["HTML5", "CSS3", "JavaScript", "React"],
        backData : ["JAVA", "PYTHON", "ORACLE", "Node.js"]
    })



    const frontClick = () => {
        myData.frontData.push("TypeScript")
        setMyData(myData)
    }

    const backClick = () => {
        const newBack = [...myData.backData,"SpringBoot" ]
        const newMyData = {...myData, backData : newBack}
        setMyData(newMyData)
    }

    return (
        <div>
            {/* 개별 컴포넌트 삽입 */}
            <h2>React-얕은 비교</h2>
            <TopComp forntData = {myData.frontData} backData={myData.backData}/>
            <button onClick={frontClick}>Add Front</button>
            <button onClick={backClick}>Add Back</button>
        </div>
    );
};

export default MyComp;
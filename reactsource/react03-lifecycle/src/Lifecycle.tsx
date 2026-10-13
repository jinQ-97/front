import { useEffect, useState } from "react";



const MoveBox = ({initPositon}:{initPositon:number}) => {
    console.log("lifeCycle ==> 1.컴포넌트실행(함수호출)")

    const [posision, setPosition] = useState(initPositon)
    const [leftCount, setLeftCount] = useState(1)
    const boxStyle:React.CSSProperties = {
        backgroundColor:'red',
        position : 'relative',
        textAlign: 'center',
        height:'100px',
        width:'100px',
        margin : '10px',
        lineHeight : '100px',
        left : `${posision}px`,
    }
        
    const moveLeft = () => {
        setPosition(() => posision - 20)
        setLeftCount(() => leftCount + 1)
    }
    const moveRight = () => {
        setPosition(() => posision + 20)
    }

    // 의존성 배열 부분을 아예 제외 : 컴포넌트가 업데이트가 될 때마다 실행
    // [] : 최초 한 번만 실행되고 더이상 실행되지 않음
    // [배열, 변수, ... ] : 선언된 값이 바뀔 때만 실행
    // useEffect(()=> {
    //     // 컴포넌트가 마운트 된 후 실행할 코드
    //     console.log("userEffect 실행 ==> 3. 컴포넌트 마운트")
    //     // 컴포넌트가 언마운트되기 직전에 실행할 코드
    //     return () => {console.log('userEffect 실행 ==> 4. 컴포넌트 언마운트')}
    // },[의존성 배열])

    useEffect(()=> {
        console.log("userEffect 실행 ==> 3. 컴포넌트 마운트")
        return () => {console.log('userEffect 실행 ==> 4. 컴포넌트 언마운트')}
    })
    console.log('return 실행 ==> 2. 렌더링(return 문)')
    return (
        <div>
            <h4>함수형 컴포넌트 생명주기</h4>
            <div style={boxStyle}>{leftCount}</div>
            <button onClick={moveLeft}>좌측이동</button>
            <button onClick={moveRight}>우측이동</button>
        </div>
    )
}

const Lifecycle = () => {
    return (
        <div>
            <h2>React Hook - useEffect</h2>
            <MoveBox initPositon={50}/>
        </div>
    );
};

export default Lifecycle;
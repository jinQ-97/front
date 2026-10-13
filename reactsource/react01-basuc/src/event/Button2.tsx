
// 자식역할 컴포넌트
const AlertButton= ({message, children}) => {
    return (
    <div>
        <button onClick={()=>alert(message)}>{children}</button>
    </div>
    )
}

// 부모역할 컴포넌트
const Button2 = () => {
    return (
        <div>
            <AlertButton message={"Playing!"}>Play Movie<AlertButton/>
            <AlertButton message={"Uploading!"}>Upload Image<AlertButton/>
        </div>
    );
};

export default Button2;
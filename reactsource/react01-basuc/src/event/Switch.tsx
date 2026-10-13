
const Switch = () => {
    // 문서 배경색 변경
    
    const handleClick = () => {
        const bodyStyle = document.body.style
        if (bodyStyle.backgroundColor === "black"){
            bodyStyle.backgroundColor = "white"
        } else {
            bodyStyle.backgroundColor = "balck"
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Toggle</button>
        </div>
    );
};

export default Switch;
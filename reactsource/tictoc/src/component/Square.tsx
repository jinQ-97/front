
type squareProp = {
    value : String|null,
    handleClick : () => void
}

const Square = ({value, handleClick}: squareProp) => {
    // const [input, setInput] = useState() - 개별관리 > 부모관리
    // const handleClick = () => setInput("X") - 개별관리

    return (
        <div>
            <button className="square" onClick={handleClick}>{value}</button>
        </div>
    );
};

export default Square;
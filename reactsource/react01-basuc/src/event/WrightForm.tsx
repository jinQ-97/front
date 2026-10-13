
const WrightForm = ({onSubmit}) => {
    return (
    <div className="border">
        <form action="" onSubmit={onSubmit}>
            <select name="gubun">
                <option value="">---------------</option>
                <option value="back">백엔드</option>
            </select>
            <input type="text" name="title"/>
            <input type="submit" value="추가"/>
        </form>            
    </div>
    );
};

export default WrightForm;
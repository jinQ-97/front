const Button3 = ({onClick, children}) => {
    return (
        <div>
            <button onClick={onClick}>{children}<button/>
        </div>
    )
}

const PlayButton = ({moviName}) => {
    return (
        <div>
            <Button3 onClick={() => alert(`Playing${moviName}`)}>Play</Button3>
        </div>
    )
}

const UploadButton = ({}) => {
    return (
        <div>
            <Button3 onClick={() => alert(`Uploading!`)}>Upload Image</Button3>
        </div>
    )
}

const Toolbar = () => {
    return (
        <div>
            <PlayButton moviName={'스파이더맨'}/>
            <UploadButton/>
        </div>
    );
};

export default Toolbar;
import { useLocation, useSearchParams } from "react-router-dom";

const RouterHooks = () => {
    const location = useLocation()
    const [searchParams, setSearchParmas] = useSearchParams()
    // ? 로 전달되는 파라메터를 가져옴
    const mode = searchParams.get("mode")
    const pageNum = searchParams.get("pageNum")

    const chageMode = () => {
        const nextMode = mode === "list" ? "view" : "list"
        setSearchParmas({
            mode : nextMode,
            pageNum : pageNum ?? "", //pageNum 이 null or undefined라면 "" 사용, 아니면 pageNum
        })
    }
    const nextPage = () => {
        const pageTemp = pageNum === null || isNaN(Number(pageNum)) ? 1 : parseInt(pageNum) + 1
        setSearchParmas({
            mode : mode ?? "",
            pageNum : pageTemp.toString(),
        })
    }
    const prevPage = () => {
        const pageTemp = pageNum === null || isNaN(Number(pageNum)) ? 1 : parseInt(pageNum) - 1
        setSearchParmas({
            mode : mode ?? "",
            pageNum : pageTemp.toString(),
        })
    }

    return (
        <div>
            <h2>라우터 관련</h2>
            <div>
                <ul>
                    <li>URL : {location.pathname}</li>
                    <li>쿼리 스트링 : {location.search}</li>
                    <li>mode : {mode}</li>
                    <li>pageNum : {pageNum}</li>
                </ul>
                <button onClick={chageMode}>mode 변경</button>
                <button onClick={prevPage}>이전 page</button>
                <button onClick={nextPage}>다음 page</button>
            </div>
        </div>
        
    );
};

export default RouterHooks;
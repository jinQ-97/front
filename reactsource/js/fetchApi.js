// REST API 웹에서 데이터를 주고 받기 위한 규칙
// 어떤 데이터를 어떤 URL로 요청하고, 어떤 HTTP Method 를 사용할지 정해놓은 방식
// 데이터 가져오기 + GET
// 데이터 추가 + POST
// 데이터 수정 + PUT(PATCH)
// 데이터 삭제 + DELETE

// URL 을 데이터 중심으로 설계
// get  / api/posts 게시물 조회
// get  / api/posts/1 1번 게시물 조회
// put  / api/posts/1 1번 게시물 수정
// delete  / api/posts/1 1번 게시물 삭제
// post  / api/posts 게시물 등록


const getData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    const data = await response.json()
    return data
}
//get
console.log(getData())


const main = async () => {
    console.log(await getData())
}
main()

//post
// JSON.stringfy : javascript 객체를 json 문자열로 변환
const postData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method : 'post',
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            tilte: '연습',
            body: '연습용 데이터',
            userId : 1,
        })
    })
    const data = await response.json()
    return data
}
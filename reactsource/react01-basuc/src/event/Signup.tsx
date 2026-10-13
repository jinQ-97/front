

const Signup = () => {
    const onSubmit = (e) => {
        // submit 중지 리엑트에서는 서버의 주소가 바뀌기 때문에
        e.preventDefault()
        // formData 모두 가져오기
        const formData = new FormData(e.currentTarget)
        const username = formData.get("username")
        const email = formData.get("email")
        console.log(username, email)
    }

    return (
        <div>
            <h1>Submit 이벤트</h1>
            <form action="" method="post" onSubmit={onSubmit}>
                <input type="text" name="username" placeholder="이름" className="border" />
                <input type="email" name="email" placeholder="이메일" className="border" />
                <button type="submit">전송</button>
            </form>
        </div>

    );
};

export default Signup;
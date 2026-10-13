import { useState } from "react";
import WrightForm from "./WrightForm";

const MyForm = () => {
    const [form, setForm] = useState({
        gubun:"",
        title:"",
    })

    // 부모가 자식의 폼 submit 처리
    const onSubmit = (e) => {
        e.preventDefault()
        // form의 모든 데이터 가져오기
        const formData = new FormData(e.currentTarget)

        const gubun = formData.get('gubun')
        const title = formData.get('title')
        //gubun 값 확인
        if (gubun && title) {
            console.log("gubun : ",gubun)
            console.log("title : ",title)
        }else {
            alert("모든 값을 채워주세요")
        }
    }
    return (
        <div>
            <WrightForm onSubmit={onSubmit} form={form} setForm={setForm}/>
        </div>
    );
};

export default MyForm;
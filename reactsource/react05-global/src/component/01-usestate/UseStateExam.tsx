import { useState } from "react";
import { initUser, type UserType } from "./user.types";

const UseStateExam = () => {
  // const {name,setName} = useState("")
  // const [year,setYear] = useState(0)
  const [user, setUser] = useState<UserType>(initUser);
  const { name, year, warning } = user;

  // name or year 변경 시 공통의 함수 호출
  const handleChange = (e) => {
    // 누구로부터 이벤트가 왔나?
    const { name, value } = e.target;
    console.log(name, value)

    if (name === "name") {
      // 기존내용은 놔두고 name 만 변경 - 원본값의 형태 > 원본복제 > 변경값추가
      setUser((prev) => ({
        ...prev,
        name: value.trim().toLowerCase(),
      }));
    } else {
      // 기존내용은 놔두고 year 만 변경
      const inputYear = value === "" ? 0 : parseInt(value);
      const age = new Date().getFullYear() - inputYear;
      setUser((prev) => ({
        ...prev,
        year: inputYear,
        warning: inputYear !== 0 && age < 18 ? "18세 이상이어야 합니다" : "",
      }));
    }
  };

  return (
    <div>
      <div className="m-3">
        <h2 className="text-2xl">useState 확인하기</h2>
        <div>
          <label htmlFor="name">이름</label>
            <input
            type="text"
            className="border border-black"
            placeholder="이름 입력"
            name="username"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="year">년도</label>
          <input
            type="number"
            className="border border-black"
            placeholder="년도 입력"
            name="year"
            value={year}
            onChange={handleChange}
          />
        </div>        
        <button type="button" className="rounded bg-orange-500 px-4 py-2">
          Reset
        </button>
      </div>

      <div>
        <ul>
          <li>Name:{name}</li>
          <li>Year:{year}</li>
          <li>{warning}</li>
        </ul>
      </div>
    </div>
  );
};

export default UseStateExam;

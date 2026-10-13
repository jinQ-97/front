import React, { useEffect, useState } from 'react';

type UserResponse = {
    results : User[]
    info: {
        seed: string,
        results : number,
        page : number,
        version : string,
    }
} 

const RandomUser = () => {
    const [result, setResult] = useState<User[]>([])

     const getData = async () => {
        const response = await fetch(`https://api.randomuser.me?results=10`)
        const data:UserResponse = await response.json()
        return data.results
        }
    
            //myData.jon 가져오기
        useEffect(()=>{
            console.log("3. useEffect 실행")
            // 렌더링 후 myData.json 가져오기
            const fetchData = async () => {
            const localData = await getData()
            setResult(localData)
            }
           fetchData()
        },[])
            
    return (
        <div>
            <table>
                <thead>
                    <th>사진</th>
                    <th>로그인</th>
                    <th>이름</th>
                    <th>국가</th>
                    <th>이메일</th>
                </thead>
                <tbody>
                    {result.map((user)=>(
                        <tr>
                            <td>
                                <img src="" alt="" />
                            </td>
                            <td>
                                {/* username */}
                                <a href=""></a>
                            </td>
                            <td>
                                {/* name 3 */}

                            </td>
                            <td>
                                {/* nat */}

                            </td>
                            <td>
                                {/* email */}
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RandomUser;
import React, { useEffect, useState } from 'react';
import type { UserType } from './LocalJsonFetcher';

type User = {
    gender: string,
    name: string,
    title: string,
    first: string,
    last: string
    
      "location": {
        "street": {
          "number": 9246,
          "name": "Bulevardi"
        },
        "city": "Kauhava",
        "state": "Lapland",
        "country": "Finland",
        "postcode": 23264,
        "coordinates": {
          "latitude": "-26.5086",
          "longitude": "61.8927"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "venla.toivonen@example.com",
      "login": {
        "uuid": "fe1fe044-25dc-4119-a8d7-a6de5fdbc3ac",
        "username": "heavymouse456",
        "password": "stephen",
        "salt": "u3WeeLNI",
        "md5": "27941630ede03e7fcf8761f8b41ff79a",
        "sha1": "114a14c74b13871205af79f4522fc401358fc7bc",
        "sha256": "3c97761e2f0853170ad2e62faf57267009144a8682255da9b6b415258acb80f1"
      },
      "dob": {
        date: number,
        age: number,
      },
      "registered": {
        date: Date,
        age: number
      },
      phone: number
      cell: number
      "id": {
        name: string,
        value: string,
      },
      "picture": {
        large: string,
        medium: string,
        thumbnail: string,
      },
      nat: string,
}


const GlobalTop = ({myLinkClick}:{myLinkClick:(num:number) => void}) => {
    console.log("1. 컴포넌트실행")
    const [myList, setMylist] = useState<UserType[]>([])

    const getData = async () => {
        const response = await fetch(`./data/myData.json`)
        const data = await response.json()
        return data
    }

        //myData.jon 가져오기
        useEffect(()=>{
            console.log("3. useEffect 실행")
            // 렌더링 후 myData.json 가져오기
            const fetchData = async () => {
            const localData = await getData()
            setMylist(localData)
            }
           fetchData()
        },[])


    console.log("2. retrun 실행 (rendering)")

    return (
        <div>
            <ul>
                {myList.map((data)=>(
                    <li key={data.id}>
                        {/* 이름 클릭시 해당 user 상세정보 가져오기 */}
                        <a href={data.id} data-id={data.num} onClick={(e)=>{
                            e.preventDefault()
                            myLinkClick(Number(e.currentTarget.dataset.id))
                            }}>{data.name}</a>
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default GlobalTop;
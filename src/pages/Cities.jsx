import {useEffect, useState} from "react";
import CityList from "../components/CityList"
function Cities(){
    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities";
    const [cityState,setCityState] = useState([]); //cityState는 빈 배열이었다가 채워지게 됨 

    // hooks
    useEffect(() => {
        console.log("cities component mounted!");
        getCities();
    }, []); // 마운트 되었을 때 한번만 호출되기 위해 빈 배열을 넣어주어야 함

    async function getCities() {
        // API 전부 다 가져오면 res변수에 저장 후 json 포맷으로 돌려줌 
        // await은 동기적으로 데이터를 가져오게 함 
        const cities = await fetch(API_URL).then((res)=> res.json());
        console.log(Cities);

        setCityState(cities);
    }

    return (
        <div>
            <h1>Cities</h1>
            <p>{API_URL}</p>
            <CityList cities={cityState}/>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default Cities;
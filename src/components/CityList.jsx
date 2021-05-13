import '../App.css';

function CityList(props) { 
    //const cities = props;
    const {cities} = props;
    var change ='';
    
    return(
        <div className= "cityList">
            <h1>CityList</h1>

            <ul>
                {cities.map((item,index) => {
                    if (String(item).charAt(0)!=change){
                        var alphabet = String(item).charAt(0)
                        change = alphabet ;
                        return <p className="cityListP">{alphabet}</p>
                    }
                    return <li className="cityListLi" key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default CityList;

/** 과제: css 또는 컴포넌트 수정 통해 페이지 꾸미기 */
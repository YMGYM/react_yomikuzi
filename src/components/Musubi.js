import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';


const Musubi = ({Kujies, setKujies, history}) => {
    const [Content, setContent] = useState('');
    let id = 0;

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleClick = () => {
        setKujies([...Kujies, {id:id, Content: Content}]);
        id++;  
        // setContent(""); history 가 있으므로 필요 없다.
        console.log(Kujies);
        history.push("/");


    }
    return (
        <div>
            <h1>소원을 적어서 쿠지를 묶어주세요</h1>
            <div style = {{width: '99vw', height: "40vh", display: "flex", justifyContent: "center", marginTop: "5vh"}}>
                <img style = {{width: '70vw', height: "40vh"}} src="omikuji-binded.png" />
            </div>

            <div  >
                <textarea style={{display: 'flex', top:"50%", justifyContent: "center"}} name=" " id="" rows="10" cols="40" placeholder="소원을입력하세요" 
                
                value={Content}
                onChange={handleChange}
                >


                </textarea>
                <button onClick={handleClick}>전송</button>
            </div>
        </div>
    );
}

export default withRouter(Musubi);

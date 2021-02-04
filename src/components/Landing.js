import React, {useState} from 'react';
import './Landing.css'
import {withRouter} from 'react-router-dom';


const Landing = ({Kuji,setKuji, history}) => {
    const [Click, setClick] = useState(false);
    
    
    const handleClick = () => {
        if(Click === false){
            // Math.random(); 0~0.999 까지의 난수를 반환
            const random = Math.ceil(Math.random()*5)
            switch(random){
            case 1:
                setKuji("대길이에욤");
                break
            case 2:
                setKuji("중길이에욤");
                break;
            case 3:
                setKuji("말길이에욤");
                break;
            case 4:
                setKuji("흉이에욤");
                break;
            case 5:
                setKuji("대흉이에욤");
                break;
            }
        }
    setClick(true);
    };

    const handleKujiClick = () => {
        let kujiSet = null;

        switch(Kuji){
            case '대길이에욤':
                kujiSet = '/verygood';
                break;
            case '중길이에욤':
                kujiSet = '/good';
                break;
            case '말길이에욤':
                kujiSet = '/soso';
                break;
            case '흉이에욤':
                kujiSet = '/bad';
                break;
            case '대흉이에욤':
                kujiSet = '/verybad';
                break;
        }

        history.push(kujiSet);

    };


    return (
    <div>
        <h1 style={{textAlign: "center"}}>Happy "YOMI KUZI"</h1>
        <h3 style={{textAlign: "center"}}>그림을 클릭해 올해의 운세를 뽑아보세요!</h3>
        <div style = {{width: '99vw', height: "40vh", display: "flex", justifyContent: "center", marginTop: "5vh"}}
        onClick= {handleClick}>
        <img style = {{width: '99vw', height: "40vh"}} src="omikuji.png" />
        </div>
        
        {
        Click ? (
        <div style={{marginTop: "5vh", marginLeft: "10vw", marginRight: "10vw", textAlign: "center"}}>
            <div className="paperIn" onClick={handleKujiClick}>
            <div className="paper">
                <p>{Kuji}</p>
            </div>
            </div>
        </div> )
        : ""
        }
    </div>
    );
}

export default withRouter(Landing);

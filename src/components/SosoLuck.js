import React from 'react';
import {withRouter} from 'react-router-dom';

const SoSoLuck = ({match, history}) => {
    const handleClick = () => {
        history.push('/');
    };


    return (
        <div>
            <div>
                말길입니다!
            </div>

            <button onClick={handleClick}>돌아가기</button>
            
        </div>
    );
}

export default withRouter(SoSoLuck);

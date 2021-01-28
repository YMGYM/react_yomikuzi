import React, {useState} from 'react';
import Landing from './components/Landing'
import {withRouter, Route} from 'react-router-dom';
import GoodLuck from './components/GoodLuck';


const App = () => {
  const [Kuji, setKuji] = useState("");

  return (
    <div>
        {/* <Landing Kuji={Kuji} setKuji={setKuji}/> */}
        <Route path='/'
        render={() => <Landing Kuji={Kuji} setKuji={setKuji}/> }
        exact
        />

        <Route path='/good'
        render={() => <GoodLuck />}
        />
      
        
    </div>

  );
};
export default withRouter(App);

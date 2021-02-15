import React, {useState} from 'react';
import Landing from './components/Landing'
import {withRouter, Route} from 'react-router-dom';
import VeryGoodLuck from './components/VeryGoodLuck';
import GoodLuck from './components/GoodLuck';
import SosoLuck from './components/SosoLuck';
import BadLuck from './components/BadLuck';
import VeryBadLuck from './components/VeryBadLuck';
import Musubi from './components/Musubi';




const App = () => {
  const [Kuji, setKuji] = useState("");
  const [Kujies, setKujies] = useState([])
  return (
    <div>
        {/* <Landing Kuji={Kuji} setKuji={setKuji}/> */}
        <Route path='/'
        render={() => <Landing Kuji={Kuji} setKuji={setKuji}/> }
        exact
        />

        <Route path='/verygood'
        render={({match}) => <VeryGoodLuck match={match} />}
        />

        <Route path='/good'
        render = {({match}) => <GoodLuck match={match} />} />

        <Route path='/soso'
        render = {({match}) => <SosoLuck match={match} />} />

        <Route path='/bad'
        render = {({match}) => <BadLuck match={match} />} />

        <Route path='/veryBad'
        render = {({match}) => <VeryBadLuck match={match} />} /> 
      
        <Route path='/musubi'
        render = {({match}) => <Musubi match={match} Kujies={Kujies} setKujies={setKujies} />} />

    </div>

  );
};
export default withRouter(App);

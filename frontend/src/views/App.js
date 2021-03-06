import '../style/css/Style.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './home/HomeScreen';
import Layout from './layout/Layout';

import HairWeddingScreen from './services/HairWeddingScreen';
import MakeupWeddingScreen from './services/MakeupWeddingScreen';
import HairEventScreen from './services/HairEventScreen';
import MakeupEventScreen from './services/MakeupEventScreen';

// import { Provider } from 'react-redux';
// import store from '../store/store';

const App = () => {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/uslugi/fryzury-slubne" exact component={HairWeddingScreen} />
            <Route path="/uslugi/makijaze-slubne" exact component={MakeupWeddingScreen} />
            <Route path="/uslugi/fryzury-okazyjne" exact component={HairEventScreen} />
            <Route path="/uslugi/makijaze-okazyjne" exact component={MakeupEventScreen} />

            {/* <Route path="/stylistki/:idStylist(\d+)-:name" component={StylistScreen} />
            <Route path="/zamowienie" exact component={OrderScreen} /> */} */}
          </Switch>
        </Layout>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;

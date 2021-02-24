import '../style/css/Style.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './home/HomeScreen';
import Layout from './layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          {/* <Route path="/uslugi/:slug" component={ServiceScreen} />
          <Route path="/stylistki/:idStylist(\d+)-:name" component={StylistScreen} />
          <Route path="/zamowienie" exact component={OrderScreen} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

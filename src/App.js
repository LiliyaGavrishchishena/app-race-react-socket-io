import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoginView from './views/LoginView';
import ListView from './views/ListView'
import routes from './configs/routes';

const App = () => {

  return (
    <>
        <Switch>
          <Route exact path={routes.LOGIN} component={LoginView} />
          <Route exact path={routes.CHARACTERS} component={ListView}/>

          <Redirect to={routes.LOGIN}/>
        </Switch>
    </>
  );
};

export default App;

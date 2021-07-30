import React, { useState, useEffect, useData } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  RouteComponentProps
} from "react-router-dom";
import ImagesDisplay from './components/ImagesDisplay.jsx';
import InnerPageDisplay from './components/InnerPageDisplay.jsx';
import DataContextProvider from './contexts/DataContext.jsx';



function App (){
  //get data

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <ImagesDisplay />} />
        <Route render={(props) => <InnerPageDisplay key={props.match.params}/>}/>
      </Switch>
    </Router>
  );
};





export default App;
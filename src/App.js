import React from 'react';
import {Route, Switch, Link} from "react-router-dom"
import CardGenerator from './components/CardGenerator';
import Landing from "./components/Landing";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/card-generator" component={CardGenerator}/>
                </Switch>
            </React.Fragment>
        )
    }
}


export default App;


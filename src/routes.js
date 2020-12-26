import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import home from './pages/index'
import test from './pages/test'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/test" component={test}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
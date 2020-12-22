import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import home from './pages/index'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
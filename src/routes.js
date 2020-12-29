import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import home from './pages/index'
import test from './pages/test'
import viewProduct from './pages/viewProduct'
import productRegister from './pages/admin_space/crud_product/product_register'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/test" component={test}/>
                <Route path="/detalhes/:id" component={viewProduct}/>

                <Route path="/produto/cadastrar" component={productRegister}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
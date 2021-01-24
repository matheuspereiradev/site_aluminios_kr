import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import home from './pages/index'
import test from './pages/test'
import viewProduct from './pages/viewProduct'
import productRegister from './pages/admin_space/crud_product/product_register'
import productList from './pages/admin_space/crud_product/product_list'
import categoryList from './pages/admin_space/crud_category/category_list'
import categoryRegister from './pages/admin_space/crud_category/category_register'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/test" component={test}/>
                <Route path="/detalhes/:id" component={viewProduct}/>

                <Route path="/admin/produto/cadastrar" component={productRegister}/>
                <Route path="/admin/produto/editar/:id" component={productRegister}/>
                <Route path="/admin/produto" exact component={productList}/>

                <Route path="/admin/categorias" exact component={categoryList}/>
                <Route path="/admin/categorias/cadastrar" component={categoryRegister}/>
                <Route path="/admin/categorias/editar/:id" component={categoryRegister}/>
                
                
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
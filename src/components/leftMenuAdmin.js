

        

import React from 'react'
import { Link } from 'react-router-dom'
import {LeftMenu} from './leftMenuAdminStyle'

export default function (props){
    return(
        <>
            <LeftMenu>
            
                <ul id="menu">
                    <li className="headerTitle">VComerce</li>
                    <li className="legend">Opções:</li>  
                    <li><Link to="/admin/produto"><div className="item">Produtos</div></Link></li>
                    <li><Link to="/admin/categorias"><div className="item">Categorias</div></Link></li>
                    
                </ul>
            
            </LeftMenu>
       
        </>
    )
}

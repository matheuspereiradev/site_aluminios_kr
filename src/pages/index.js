import React from 'react'
import NavBar from '../components/navBar'
import LeftMenu from '../components/leftMenu'
import ProductItem from '../components/productItem'
import {Body} from '../styles/indexStyled'
//import {FaUserAlt} from 'react-icons/fa'

export default function index(){
    return(
        <>
          <div>
          <NavBar/> 
          <LeftMenu/>
          <Body>
            jksak
          </Body>
          </div>
               
        </>
    )
}

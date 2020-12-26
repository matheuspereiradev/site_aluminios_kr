import React, { useState } from 'react'
import {StyledLeftMenu} from './leftMenuStyle'
import api from '../services/api'
import { AllOutTwoTone } from '@material-ui/icons';

export default function LeftMenu(){
    return(
        <StyledLeftMenu>            
            <ul id="menu">
                <li className="headerTitle">VComerce</li>
                <li className="legend">Categorias:</li>              
                <li><a href="#" id="m2" data-id="b2">Menu Item 2</a></li>
                <li><a href="#" data-id="b3">Menu Item 3</a></li>
                <li className="selected"><a href="#" data-id="b4">Menu Item 4</a></li>
                <li><a href="#" data-id="b5">Menu Item 5</a></li>
                <li><a href="#" data-id="b6">Menu Item 6</a></li>
                <li><a href="#" data-id="b7">Menu Item 7</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                
          </ul>
            
        </StyledLeftMenu>
    )
}

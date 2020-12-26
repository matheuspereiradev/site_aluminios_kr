import React from 'react'
import {SearchBox} from './SearchBoxStyle'

export default function searchBox(){
    return(
        <SearchBox>
                <input type="text" placeholder="O que você procura?"/>
                <button className="confirm-button">
                    Buscar
                </button>
        </SearchBox>
    )
}                
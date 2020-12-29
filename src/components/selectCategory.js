import React from 'react'
import {BtnLink} from './buttonCategory'
import {FaRegAngry} from 'react-icons/fa'

export default function (props){
    return(
        <>
            <BtnLink>
                <a href="skajsdsj">
                    <div>
                        <FaRegAngry size={100}/>
                    </div>
                    <div>
                       {props.nome}
                    </div>
                </a>
            </BtnLink>
       
        </>
    )
}

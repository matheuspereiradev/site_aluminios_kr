import React from 'react'
import {CardItem} from './cardtItemStyle'
import {Link} from 'react-router-dom'

export default function (props){
    return(
        <CardItem>
            
                <input type="hidden" value={props.idProduct}/>
                <div className="card">
                    <img src={props.img} alt={props.name}/>
                    <div className="card-body">
                        <div className="card-title">
                            {props.name}
                        </div>
                        <div className="card-value">
                            <small>R$</small>{props.value}
                        </div>
                        <Link to={props.link}><button className="btn-buy">Adicionar ao carrinho</button></Link>
                    </div>

                </div>
                
            
        </CardItem>
    )
}
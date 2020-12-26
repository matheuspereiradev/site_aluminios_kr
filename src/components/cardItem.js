import React from 'react'
import {CardItem} from './cardtItemStyle'

export default function cardItem(props){
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
                        <a href={props.link}><button className="btn-buy">Adicionar ao carrinho</button></a>
                    </div>

                </div>
                
            
        </CardItem>
    )
}
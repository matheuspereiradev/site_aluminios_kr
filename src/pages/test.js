import React from 'react'
import '../styles/test.css'


export default function test(){
    return(
      <>
        <div className="card">
            <img src="http://kagw.com/wp-content/uploads/2017/11/200x150.png"/>
            <div className="card-body">
                <div className="card-title">
                    matheus  tudo o que voce precisa para sua casa dia e noite
                </div>
                <div className="card-value">
                    <small>R$</small>120,45
                </div>
                <button type="submit">Comprar</button>
            </div>
        </div>
        
      </>

    )
}

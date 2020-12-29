import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import '../../../styles/home.css'
import api from '../../../services/api'

export default function ProductRegister(){

  const [categorias,setCategorias]=useState([])
  const [nome,setNome]=useState('');
  const [descricao,setDescricao] = useState('');
  const [preco,setPreco] = useState('0');
  const [categoria,setCategoria] = useState(0);

  useEffect(()=>{
    api.get('categories/all').then(cat=>{
      setCategorias(cat.data)
    })
  },[])

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome)
    console.log(descricao)
    console.log(categoria)
  }

    return(
      <div className="page">
        <div>
          <ul id="menu">
            <li className="headerTitle">VComerce</li>
            <li className="legend">Opções:</li>  
                <li><div className="item">oi</div></li>
          </ul>
        </div>  
        <div>
              <div className="nav">
                <div className="nav-header">
                            <div className="nav-title">
                                VCommerce
                            </div>
                            
                        </div>
                        
                        <div className="nav-btn">
                            <label className="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                            </label>
                        </div>
                        <div className="nav-links">
                            <a href="https://codepen.io/jo_Geek/"><FaShoppingCart/> Carrinho</a>
                            <a href="https://jsfiddle.net/user/jo_Geek/"><FaUserAlt/> Login</a>
                        </div>
              </div>
              <div className="main">
                  <div className="content">
                    <div className="content-body">
                      <form onSubmit={handleSubmit}>
                          <h1>Cadastro de produtos</h1>
                          <hr/>
                          <label>Nome do produto:</label>
                          <input onChange={event => { setNome(event.target.value) }} value={nome} className="input-text" type="text"/>
                          <label>Descrição do produto:</label><br/>
                          <textarea onChange={event=>{ setDescricao(event.target.value)}} rows="5" cols="135">{descricao}</textarea>
                          <label>Preço:</label>
                          <input onChange={event => { setPreco(event.target.value) }} value={preco} className="input-text" type="text"/>
                          <label>Categoria:</label><br/>
                          <select id="categorias" value={categoria} onChange={event=>{ setCategoria(event.target.value)}}>
                            <option value="0">Selecione uma categoria</option>
                            {categorias && (categorias.map(cat=>{
                              return(
                                <option key={cat.id} value={cat.id}>{cat.nome}</option>
                              )
                            }))}
                          </select>

                          <button type="submit">Salvar</button>
                      </form>
                      
                    </div>
                </div>
                <div id="footer">
                    <span>&copy; CSS ROCKS</span> 
                  </div>
              </div>
        </div>           
              
      </div>

    )
}

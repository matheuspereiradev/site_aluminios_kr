import React, { useEffect, useState } from 'react'
import '../../../styles/home.css'
import api from '../../../services/api'
import TopBar from '../../../components/topBarAdmin'
import LeftMenu from '../../../components/leftMenuAdmin'
import { Link } from 'react-router-dom'

export default function CategoryList(){

  const [categoria,setCategoria]=useState([])

  useEffect(()=>{
    api.get('categories/all').then(cat=>{
        setCategoria(cat.data);
      })
  },[])

    return(
        <div className="page">
        <LeftMenu/> 
        <div>
            <TopBar/>
              
              <div className="main">
                  <div className="content">
                    <div className="content-body">
                    <Link to="#"><button>cadastrar nova</button></Link>
                    <table>
                    <caption>Categorias</caption>
                    <thead>
                        <tr>
                        <th scope="col">Cód</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categoria && (
                            categoria.map((categoria)=>{
                              return(
                                <tr key={categoria.id}>
                                        <td data-label="cod">{categoria.id}</td>
                                        <td data-label="nome">{categoria.nome}</td>
                                        <td data-label="descricao">{categoria.descricao}</td>
                                        <td data-label="edit"><button>Editar</button></td>
                                        <td data-label="delete"><button>Excluir</button></td>
                                </tr>
                              )
                            })
                            
                        )}
                        
                        
                    </tbody>
                    </table>    
                    
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

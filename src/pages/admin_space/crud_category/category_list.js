import React, { useEffect, useState } from 'react'
import '../../../styles/home.css'
import api from '../../../services/api'
import TopBar from '../../../components/topBarAdmin'
import LeftMenu from '../../../components/leftMenuAdmin'
import { Link } from 'react-router-dom'
import {FaTrash, FaEdit} from 'react-icons/fa'

export default function CategoryList(){

  const [categoria,setCategoria]=useState([])

  useEffect(()=>{
    api.get('categories/all').then(cat=>{
        setCategoria(cat.data);
      })
  },[])

  function excluirCategoria(id){
    try{
      api.delete(`categories/delete/${id}`).then(res=>{
        setCategoria(categoria.filter((cat)=>{
          return cat.id !== id
        }))
      })
    }catch(e){
      alert(e)
    }
  }

    return(
        <div className="page">
        <LeftMenu/> 
        <div>
            <TopBar/>
              
              <div className="main">
                  <div className="content">
                    <div className="content-body">
                    <Link to="/admin/categorias/cadastrar"><button className="btn btn-block green-button">cadastrar nova</button></Link>
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
                                        <td data-label="Cód">{categoria.id}</td>
                                        <td data-label="nome">{categoria.nome}</td>
                                        <td data-label="descrição">{categoria.descricao}</td>
                                        <td data-label="editar"><button className="btn btn-block btn-sm blue-button"><FaEdit/> Editar</button></td>
                                        <td data-label="excluir"><button className="btn btn-block btn-sm red-button" onClick={()=>{excluirCategoria(categoria.id)}}><FaTrash/> Excluir</button></td>
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

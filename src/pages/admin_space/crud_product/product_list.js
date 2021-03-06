import React, { useEffect, useState } from 'react'
import '../../../styles/home.css'
import api from '../../../services/api'
import TopBar from '../../../components/topBarAdmin'
import LeftMenu from '../../../components/leftMenuAdmin'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function ProductList(){

  const [produtos,setProdutos]=useState([])

  useEffect(()=>{
    api.get('products/all').then(pro=>{
        setProdutos(pro.data);
      })
  },[])


  
    
  function excluirProduto(id){
    try{
      api.delete(`products/delete/${id}`).then(res=>{
        setProdutos(produtos.filter((pro)=>{
          return pro.id !== id
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
                    <Link to="/admin/produto/cadastrar"><button className="btn btn-block green-button">cadastrar novo</button></Link>
                    <table>
                    <caption>Produtos</caption>
                    <thead>
                        <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                    {produtos && (
                            produtos.map((produto)=>{
                              return(
                                <tr key={produto.id}>
                                        <td data-label="nome">{produto.nome}</td>
                                        <td data-label="preço">{produto.preco}</td>
                                        <td data-label="quantidade">{produto.quantidade}</td>
                                        <td data-label="categoria">{produto.categoria.nomeCategoria}</td>
                                        <td data-label="editar"><Link to={`/admin/produto/editar/${produto.id}`}><button className="btn btn-block btn-sm blue-button"><FaEdit/> Editar</button></Link></td>
                                        <td data-label="excluir" onClick={()=>{excluirProduto(produto.id)}}><button className="btn btn-block btn-sm red-button"><FaTrash/> Excluir</button></td>
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

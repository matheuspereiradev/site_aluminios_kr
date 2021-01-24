import React, { useEffect, useState } from 'react'
import '../../../styles/home.css'
import api from '../../../services/api'
import TopBar from '../../../components/topBarAdmin'
import LeftMenu from '../../../components/leftMenuAdmin'
import { useParams, Redirect } from 'react-router-dom'
import { FaSave } from 'react-icons/fa'

export default function CategoryRegister(){

  let {id} = useParams();

  const [nome,setNome]=useState('');
  const [descricao,setDescricao] = useState('');
  
  useEffect(()=>{
    if(id!== undefined){
      api.get(`categories/find/${id}`).then(
        result=>{
          setNome(result.data[0].nome);
          setDescricao(result.data[0].descricao);
        }
      )
    }
    
  },[id])
  

  async function handleSubmit(event) {
    event.preventDefault();

      if (id === undefined){
        const data = {
          "nome":nome,
          "descricao":descricao
        }
        const res = await api.post('/categories/register',data);
        if (res.status === 200){
          alert('cadastrado com sucesso');
        }
      }else{
        const data = {
          "id":id,
          "nome":nome,
          "descricao":descricao
        }
        const res = await api.put('/categories/edit',data);
        if (res.status === 200){
          alert('editado com sucesso');
        }
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
                      <form onSubmit={handleSubmit}>
                          <h1>Cadastro de categorias</h1>
                          <hr/>
                          
                          <label>Nome da categoria:</label>
                          <input onChange={event => { setNome(event.target.value) }} value={nome} className="input-text" type="text"/>
                          <label>Descrição do produto:</label><br/>
                          <textarea value={descricao} onChange={event=>{ setDescricao(event.target.value)}} rows="5" className="text-area"/>
                          <br/><br/>
                          <button type="submit"className="btn btn-block green-button"><FaSave/> Salvar</button>
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

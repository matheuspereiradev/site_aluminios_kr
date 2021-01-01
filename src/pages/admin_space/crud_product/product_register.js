import React, { useEffect, useState } from 'react'
import '../../../styles/home.css'
import api from '../../../services/api'
import TopBar from '../../../components/topBarAdmin'
import LeftMenu from '../../../components/leftMenuAdmin'
import { useParams } from 'react-router-dom'

export default function ProductRegister(){

  let {id} = useParams();

  const [uuid, setUUID] = useState('')
  const [categorias,setCategorias]=useState([])
  const [nome,setNome]=useState('');
  const [descricao,setDescricao] = useState('');
  const [preco,setPreco] = useState('0');
  const [categoria,setCategoria] = useState(0);
  const [imagem,setImagem] = useState(null);
  /*
  aviso{
    mensagem:"",
    status:""[error|success]
  }
  */

  useEffect(()=>{
    if(id!== undefined){
      api.get(`products/find/${id}`).then(
        result=>{
          setUUID(id);
          setNome(result.data[0].nome);
          setDescricao(result.data[0].descricao);
          setPreco(result.data[0].preco);
          setCategoria(result.data[0].categoria.idCategoria);
        }
      )
    }
    
  },[id])

  useEffect(()=>{
    api.get('categories/all').then(cat=>{
      setCategorias(cat.data)
    })
  },[])

  function handleImage(event) {
    
    if(!event.target.files[0]){
      return;
    }

    setImagem(event.target.files[0])
  }

  async function handleSubmit(event) {
    event.preventDefault();

      const valor = preco.replace(",",".");
      const data = new FormData();
      data.append('nome',nome);
      data.append('descricao',descricao);
      data.append('categoria',categoria);
      data.append('preco',valor);
      data.append('thumbnail',imagem)

      if(uuid===''){
        const res = await api.post('http://localhost:8081/products/register',data);
        if (res.status === 200){
          alert('cadastrado com sucesso');
        }
      }else{
        data.append('uuid',uuid);

        const res2 = await api.put('http://localhost:8081/products/edit',data);
        if (res2.status === 200){
          alert('Editado com sucesso');
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
                          <h1>Cadastro de produtos</h1>
                          <hr/>
                          
                          <label>Nome do produto:</label>
                          <input onChange={event => { setNome(event.target.value) }} value={nome} className="input-text" type="text"/>
                          <label>Descrição do produto:</label><br/>
                          <textarea value={descricao} onChange={event=>{ setDescricao(event.target.value)}} rows="5" cols="135"/>
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
                          <input type="file" onChange={handleImage} id="thumbnail"/>    
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

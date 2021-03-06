import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import SearchBox from '../components/searchBox'
import CardItem from '../components/cardItem'
import api from '../services/api'
import '../styles/home.css'

export default function Index(){
   
   const [categories,setCategories] = useState([]);
   const [products, setproducts] = useState([]);
   const [filterProducts,setFilterProducts] =  useState([]);

   useEffect(()=>{
      api.get('categories/all').then(cat=>{
         setCategories(cat.data) 
      })

      api.get('products/all').then(pro=>{
        setproducts(pro.data);
        setFilterProducts(pro.data)
      })
   },[])

   function filtraCategoria(id){
      setFilterProducts(products.filter((elemnt)=>{
        return elemnt.categoria.idCategoria === id;
      }))
   }
   
    return(
      <div className="page">
             
        <div>
          <ul id="menu">
            <li className="headerTitle">VComerce</li>
            <li className="legend">Categorias:</li>  
            {categories && (categories.map(cat=>{
                return(
                  <li key={cat.id} onClick={()=>{filtraCategoria(cat.id)}} id={cat.id} data-id={cat.id}>
                      <div className="item">{cat.nome}</div>
                    </li>
                )
            }))}
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
                      <center><SearchBox/></center>
                      <br/>
                      <div className="products-grid">
                        {filterProducts && (
                            filterProducts.map((produto)=>{
                              return(
                                <CardItem key={produto.id} name={produto.nome} value={produto.preco} link={`datalhes/${produto.id}`} img={`http://localhost:8081/uploads/${produto.thumbnail}`}/>
                              )
                            })
                            
                        )}
                        </div>
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

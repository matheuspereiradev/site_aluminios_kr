import React from 'react'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import SearchBox from '../components/searchBox'
import CardItem from '../components/cardItem'
import '../styles/home.css'

export default function index(){
    return(
      <>
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
        <div>
          <ul id="menu">
                <li className="headerTitle">VComerce</li>
                <li className="legend">Categorias:</li>              
                <li><a href="#" id="m2" data-id="b2">Menu Item 2</a></li>
                <li><a href="#" data-id="b3">Menu Item 3</a></li>
                <li><a href="#" data-id="b4">Menu Item 4</a></li>
                <li><a href="#" data-id="b5">Menu Item 5</a></li>
                <li><a className="selected" href="#" data-id="b6">Menu Item 6Menu Item sjdjsdcjd cdcdecehjx exer cuhr crf cvroh cjhrcvjhr8</a></li>
                <li><a href="#" data-id="b7">Menu Item 7</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                <li><a href="#" data-id="b8">Menu Item 8</a></li>
                
          </ul>
                <div className="main">
                  <div className="content">
                    <div className="content-body">
                      <center><SearchBox/></center>
                        
                      <br/>
                      <div className="products-grid">
                        <CardItem name="Cobra peçonhenta chique" value="120" link="www.com" img="https://www12.senado.leg.br/noticias/materias/2020/08/10/trafico-internacional-de-animais-tera-penas-mais-duras-preveem-propostas/naja.jpg/@@images/image/imagem_materia"/>
                        <CardItem name="Cão chupando manga" value="150" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2018/07/210.jpg"/>
                        <CardItem name="Macaco engraçado" value="2000" link="www.com" img="https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG"/>
                        <CardItem name="Filhote de cruz credo pelado dos dentes enormes" value="2000" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2018/07/68.jpg"/>
                        <CardItem name="Espaçonave" value="2500" link="www.com" img="https://hypescience.com/wp-content/uploads/2015/03/arraia-maior-peixe-agua-doce.jpg"/>
                        <CardItem name="Rato grande" value="100" link="www.com" img="https://ecoa.org.br/wp-content/uploads/2019/02/capivara-animais-pantanal.jpg"/>
                        <CardItem name="Dinossauro" value="2000" link="www.com" img="https://cdn.britannica.com/s:575x450/20/166820-004-581CFC80.jpg"/>
                        <CardItem name="Rato voador" value="2000" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2020/05/si_morcego.jpg"/>
                        <CardItem name="Satanas aereo" value="2000" link="www.com" img="https://static.meionorte.com/uploads/imagens/2019/11/14/67006847-3f5b-4e06-99e0-7757ae2cf3ee-bcbf8d39-568d-47b1-8de5-cab5c12d416b.jpg"/>
                        <CardItem name="Gato gigante pintado" value="2000" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2020/04/y-1.jpg"/>
                        <CardItem name="Casal" value="2000" link="www.com" img="https://ep01.epimg.net/brasil/imagenes/2019/11/13/album/1573641411_551713_1573746335_noticia_normal_recorte1.jpg"/>
                        <CardItem name="Galinha gigante" value="2000" link="www.com" img="https://i1.wp.com/animaisvaliosos.com.br/wp-content/uploads/2020/05/o-que-avestruz-come.jpg?w=750&ssl=1"/>
                        <CardItem name="Cão chupando manga" value="150" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2018/07/210.jpg"/>
                        <CardItem name="Macaco engraçado" value="2000" link="www.com" img="https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG"/>
                        <CardItem name="Filhote de cruz credo pelado dos dentes enormes" value="2000" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2018/07/68.jpg"/>
                        <CardItem name="Espaçonave" value="2500" link="www.com" img="https://hypescience.com/wp-content/uploads/2015/03/arraia-maior-peixe-agua-doce.jpg"/>
                        <CardItem name="Rato grande" value="100" link="www.com" img="https://ecoa.org.br/wp-content/uploads/2019/02/capivara-animais-pantanal.jpg"/>
                        <CardItem name="Dinossauro" value="2000" link="www.com" img="https://cdn.britannica.com/s:575x450/20/166820-004-581CFC80.jpg"/>
                        <CardItem name="Rato voador" value="2000" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2020/05/si_morcego.jpg"/>
                        <CardItem name="Satanas aereo" value="2000" link="www.com" img="https://static.meionorte.com/uploads/imagens/2019/11/14/67006847-3f5b-4e06-99e0-7757ae2cf3ee-bcbf8d39-568d-47b1-8de5-cab5c12d416b.jpg"/>
                        <CardItem name="Gato gigante pintado" value="2000" link="www.com" img="https://super.abril.com.br/wp-content/uploads/2020/04/y-1.jpg"/>
                        <CardItem name="Casal" value="2000" link="www.com" img="https://ep01.epimg.net/brasil/imagenes/2019/11/13/album/1573641411_551713_1573746335_noticia_normal_recorte1.jpg"/>
                        <CardItem name="Galinha gigante" value="2000" link="www.com" img="https://i1.wp.com/animaisvaliosos.com.br/wp-content/uploads/2020/05/o-que-avestruz-come.jpg?w=750&ssl=1"/>
                      </div>
                    </div>
                  <div id="footer">
                    <span>&copy; CSS ROCKS</span> 
                  </div>
                </div>
                </div>
        </div>           
              
      </>

    )
}

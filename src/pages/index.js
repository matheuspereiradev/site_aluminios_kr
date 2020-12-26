import React from 'react'
import ProductItem from '../components/productItem'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import SearchBox from '../components/searchBox'
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
                <div class="main">
                  <div class="content">
                  <p><SearchBox/></p>  
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  <p>Cras gravida, diam non adipiscing cursus, sapien urna adipiscing enim, at faucibus nunc felis at turpis. Aliquam erat volutpat. Nulla facilisi. Aenean nec nisi gravida ante convallis euismod sed quis odio. Sed nulla est, fringilla vel rhoncus vel, fermentum et turpis. Curabitur eu posuere tortor. Integer sit amet nisl elit, gravida rutrum ipsum. Cras nisl est, sodales quis faucibus nec, tempus vel libero. Aliquam lobortis gravida erat, in placerat libero ultricies in. Curabitur volutpat lorem ut ligula aliquet a fermentum augue porttitor. Vestibulum varius, purus id sollicitudin tincidunt, velit felis tincidunt erat, ut feugiat augue diam commodo lorem. Donec in augue non est tincidunt consequat. Mauris nec justo eget augue varius pulvinar id ut risus. Donec fringilla, enim vitae tincidunt accumsan, urna elit laoreet tellus, ac gravida dolor dolor ac quam. Vestibulum dignissim felis quis tortor sollicitudin ut placerat mi adipiscing.</p>
                  </div>

                  <div id="footer">
                    <span>&copy; CSS ROCKS</span> 
                  </div>
                </div>
        </div>           
              
      </>

    )
}

import React from 'react'
import {StyledProduct} from './productItemStyle'

export default function LeftMenu(){
    return(
        <StyledProduct>            
            
<ul class="cards">
  <li>
    <figure class="product-card">
      <a href="#">
        <img class="product-card-img" src="https://2.bp.blogspot.com/-eR7OIV0go7U/UdJxVSMzHeI/AAAAAAAAZNA/-is7Wx1eQyA/s600/DUSIT-THANI-HOTEL-MALDIVES_TRAVEL_SUMMER-TRAVEL_TROPICAL-VACATION-10.jpg"/>
        <figcaption>
          <h5 class="product-card-title">Product Title</h5>
          <p>Lorem ipsum dolor sit amet, nisl rebum moderatius ut pri, ius te dico exerci, legimus facilis expetendis</p>
          
          <div class="product-card-price">
            <span class="price-savings">Save 25%</span>
            <s class="original-price">$176</s>
            <p class="amount-price">
              <span class="from">starting at</span>
              $99<span class="from">/night</span>
            </p>
          </div>
        </figcaption>
      </a>
    </figure>
  </li>
  
</ul>
        </StyledProduct>
    )
}
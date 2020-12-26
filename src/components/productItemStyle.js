import styled from 'styled-components'

export const StyledProduct = styled.div`
  /* Styles to ignore */
.cards {
  margin: 20px;
  width: 600px;
  list-style-type: none;
}

.cards li {
  float: left;
  width: 40%;
  display: block;
  margin-right: 2%;
  margin-bottom: 10px;
}

img {
  height: auto;
  max-width: 100%;
}

/* End-of-ignore-styles */

.product-card {
	max-width: 280px;
  font-size: 12px;
}

.product-card > a {
  background: #f2f2f2;
  color: #333;
  transition: all 100ms;
  position: relative;
  display: block;
  text-decoration:none;
  z-index: 0;
  padding-bottom: 5px;
}

.product-card > a:hover {
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
}

.product-card .product-card-img {
  display: block;
  height: 150px;
  width: 100%;
}

.product-card figcaption {
  display: block;
  padding: 0 10px;
}

.product-card .product-card-address {
  color: #888;
  line-height: 1.2;
}

.product-card .product-card-address i {
	font-size: 14px;
	margin-right: 2px;
  line-height: 1.2;
} 

.product-card .product-card-price {
  display: block;
  text-align: right;
}

.product-card .product-card-price .price-savings,
.product-card .product-card-price .original-price {
  line-height: 22px;
  display: inline-block;
  vertical-align: middle;
}

.product-card .product-card-price .price-savings {
  float: left;
  color: green;
  color: #82b548;
}

.product-card .product-card-price .original-price {
  color: #aaa;
  font-size: 14px;
}

.product-card .product-card-price .amount-price {
  text-align: right;
  font-size: 20px;
  color: #82b548;
}

.product-card .product-card-price .from {
  font-size: 12px;
}
`


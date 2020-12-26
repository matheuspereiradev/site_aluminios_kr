import styled from 'styled-components'

export const CardItem = styled.div`
 
.card{
    width: 200px;
    min-height: 230px;
    background-color: #f0cbf0;
    border-radius: 8px;
}

.card > img{
    width: 100%;
    height: 150px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card > .card-body{
    padding: 3px;
}

.card > .card-body > .card-title{
    text-align: center;
    font-size: 15px;
    line-height: 12px;
    font-weight: 600;
}


.card > .card-body> .card-value{
    margin-top: 5px;
    padding: 2px;
    font-size: 18px;
    font-weight: 700;
}

.card > .card-body> .card-value > small{
    padding: 2px;
    font-size: 11px;
    vertical-align: top;

}

a{
  text-decoration:none;
  color:black;
}

a:visited{
  text-decoration:none;
}
.btn-buy{
    height: 30px;
    width:100%;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    background: #25BA6B;
    color: #fff;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
}

.btn-buy:hover{
    background: #1B6E42;
}

.btn-favorite{
    height: 30px;
    width:30px;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    color: #DE163F;
    background-color: #fff;
    transition: background-color 0.2s;
    padding:-4px;
}

.btn-favorite:hover{
    color: #AB2800;
    background-color: #ffeded;
}

`


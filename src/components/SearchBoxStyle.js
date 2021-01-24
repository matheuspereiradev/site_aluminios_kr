import styled from 'styled-components'

export const SearchBox = styled.div`


input{
    border:1px solid #dac5e8 ;
    border-right:0;
    font-size: 16px;
    background-color:#fff;
    color: #333;
    height: 50px;
    max-width:500px;
    width: 78%;
    padding-left:1%;
    padding-right:0px;
    padding-top:0px;
    padding-bottom:0px;
    border-radius: 4px 0px 0px 4px;
}

button{
    height: 52px;
    width:20%;
    max-width:120px;
    min-width:70px;
    border: solid #dac5e8 1px;
    cursor: pointer;
    background: #8937B9;
    color: #fff;
    font-weight: 800;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    border-radius: 0px 4px 4px 0px;
}

button:hover{
    background: #4C0078;
}

`
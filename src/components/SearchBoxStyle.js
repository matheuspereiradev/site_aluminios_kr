import styled from 'styled-components'

export const SearchBox = styled.div`


input{
    border:none;
    font-size: 16px;
    background-color:#AA82C4;
    color: #333;
    height: 50px;
    max-width:500px;
    width: 78%;
    padding-left:1%;
    padding-right:0px;
    padding-top:0px;
    padding-bottom:0px;
}

button{
    height: 50px;
    width:20%;
    max-width:120px;
    min-width:70px;
    border: 0;
    cursor: pointer;
    background: #8937B9;
    color: #fff;
    font-weight: 800;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
}

button:hover{
    background: #4C0078;
}

`
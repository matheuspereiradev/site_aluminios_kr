import styled from 'styled-components'

export const BtnLink = styled.div`

    
    *{
        
        display:flex;
        align-items:center;
        justify-content:center;
        padding-top:1px;
    }

    

    a{
        width:150px;
        height:150px;
        border: 1px solid black;
        display: block;
        text-decoration:none;
        background-color:#F5FFFA;
    }
    a:link {
        color: #007BFF;
        background-color:#F5FFFA;
    }
    a:visited{
        color:#007BFF;
        background-color:#F5FFFA;
    }
    a:hover {
    color: #0000CD;
    background-color:#B0E0E6;
    }

    /* selected link */
    a:active {
    color: #0000CD;
    background-color:#B0E0E6;
    }

`
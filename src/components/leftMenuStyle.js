import styled from 'styled-components'

export const StyledLeftMenu = styled.div`
   
    .left { 
    width: 20%;
    float: left;
    }

    #menu {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    width: 20%;
    font-size: 14px;
    background-color: #8937B9; 
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    }

    #menu li {
    display: block;
    position: relative;
    z-index: 2;
    
    
    }


    #menu li a:hover {
    background-color:#B84AF7;
    }

    #menu li a:active {
    background-color:#B84AF7;
    }


    #menu li a { color: #fff; text-decoration: none; display: block; padding: 7px 15px;}

    #menu li.selected {
    position: relative;
    width: 100%;
    height: 33px;
    background-color: #4C0078;
    }

    #menu li.headerTitle {
    position: relative;
    width: 100%;
    height: 46px;
    background-color: #6702a0;
    color: #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:25px;
    font-weight:700;
    }

    #menu li.legend {
    width: 80%;
    height: 20px;
    background-color: #8937B9;
    color: #fff;
    display:block;
    font-size:12px;
    font-weight:600;
    padding: 7px 15px;
    }

    
    .block {
    min-height: 262px;
    background-color: #f4f4f4;
    padding: 5px 15px;
    }

    .block:last-child {
    min-height: 620px;
    }

    @media (max-width:600px) {
        display:none;
    }
    
`
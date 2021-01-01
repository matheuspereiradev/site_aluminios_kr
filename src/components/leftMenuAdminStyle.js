import styled from 'styled-components'

export const LeftMenu = styled.div`
#menu {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
    font-size: 12px;
    background-color: #8937B9; 
    top: 0;
    left: 0;
}

#menu a{
    text-decoration:none;
}

#menu li {
    display: block;
    position: relative;
    z-index: 2; 
     
}


#menu li .item:hover {
    background-color:#B84AF7;
}

#menu li .item:active {
    background-color:#B84AF7;
}


#menu li .item { color: #fff; display: block; padding: 7px 15px;cursor: pointer;  }

#menu li .selected {
    position: relative;
    background-color: #4C0078;
    display: block; padding: 7px 15px;cursor: pointer;color: #fff;
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
    width: 100%;
    height: 20px;
    background-color: #8937B9;
    color: #fff;
    font-size:12px;
    font-weight:600;
}

`


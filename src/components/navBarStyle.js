import styled from 'styled-components'

export const StyledNavBar = styled.div`
    
    .nav {
    height: 46px;
    width: 80%;
    background-color: #6D00AB;
    position: relative;
    float:right;
    }

    .nav > .nav-header {
    display: none;
    }

    .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 15px;
    color: #fff;
    padding: 10px 10px 10px 10px;
    }

    .nav > .nav-btn {
    display: none;
    }

    .nav > .nav-links {
    display: inline;
    float: right;
    font-size: 15px;
    }

    .nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
    }

    .nav > .nav-links > a:hover {
    background-color: rgba(0, 0, 0, 0.3);
    }

    .nav > #nav-check {
    display: none;
    }

  

    @media (max-width:600px) {

    .nav{
        width:100%
    }    

    .nav > .nav-header {
    display: inline;
    }

    .nav > .nav-btn {
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 0px;
    }
    .nav > .nav-btn > label {
        display: inline-block;
        width: 50px;
        height: 46px;
        padding: 13px;
    }
    .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
        background-color: rgba(0, 0, 0, 0.3);
    }
    
    .nav > .nav-btn > label > span {
        display: block;
        width: 25px;
        height: 4px;
        border-top: 2px solid #eee;
    }
    .nav > .nav-links {
        position: absolute;
        display: block;
        width: 100%;
        background-color: #333;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 0px;
        left: 0px;
    }
    .nav > .nav-links > a {
        display: block;
        width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
        height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
        height: calc(100vh - 50px);
        overflow-y: auto;
    }
    }
`
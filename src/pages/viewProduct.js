import {React} from 'react'
import {useParams} from "react-router-dom";

export default function ViewProduct(){

    const {id} = useParams();
    return(
        <>
        <h1>Ver produto: {id}</h1>
        </>
        
    );
}
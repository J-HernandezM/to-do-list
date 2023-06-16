import React from "react";
import { withStorageListener } from "../withStorageListener";

//Podemos acceder a las propiedades de nuestro HOC
function ChangeAlert({show, toggleShow, synchronize}){
    if(show){
        return (
        <div>
            <p>Cambios recientes</p>
            <button onClick={()=>{toggleShow()}}>Actualiza</button>
        </div>)
        
    }else{
        return (<p>Updated</p>)
    }
}
//Aqui cambiamos nuestro componente usando el HOC
const ChangeAlertWithListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithListener}
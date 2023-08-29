import React from "react";
import { withStorageListener } from '../../withStorageListener'
import './ChangeAlert.css'

//Podemos acceder a las propiedades de nuestro HOC
function ChangeAlert({show, toggleShow, synchronize}){
    if(show){
        return (
        <div className="change--bg">
            <div className="change--container">
                <p className="change--text">Hay cambios recientes en tus TODO's</p>
                <button className="change--button" onClick={()=>{toggleShow()}}>Actualiza</button>
            </div>
        </div>)
        
    }else{
        return (<></>)
    }
}
//Aqui cambiamos nuestro componente usando el HOC
const ChangeAlertWithListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithListener}
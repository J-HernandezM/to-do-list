import React from "react";
import { withStorageListener } from "../withStorageListener";


function ChangeAlert({show, toggleShow}){
    if(show){
        return (<p>Cambio la cumbia</p>)
    }else{
        return (<p>No cambio la cumbia</p>)
    }
}

const ChangeAlertWithListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithListener}
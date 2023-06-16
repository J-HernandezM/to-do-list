import React from "react";

//Definimos nuestro HOC y que le hara a cualquier componente que ingrese dentro de el
function withStorageListener(WrappedComponent){
    return function WrapperWithListener(props){
        const [storageChange, setStorageChange] = React.useState(false)
        window.addEventListener('storage', (change)=>{
            if(change.key==='TODOS_V1'){
                console.log('cambio la cumbia')
                setStorageChange(true)
            }
        })

        //Esta funcion recarga y luego avisa que ya no hay cambios pendientes
        const toggleShow = ()=>{
            props.synchronize()
            setStorageChange(false)
        }

        return(
            <WrappedComponent 
                show = {storageChange}
                toggleShow = {toggleShow}
            />
        )
    }
}


export {withStorageListener}
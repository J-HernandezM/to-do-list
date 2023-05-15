import React from 'react';
//CUSTOM HOOK, ABSTRAER LOGICA PARA ALIVIANAR LA COMPLEJIDAD DEL COMPONENTE
function useLocalStorage(itemName, defaultItem){
    //creamos un nuevo estado
    const [items, setItems] = React.useState(defaultItem)
    //estado de carga y error
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    //aplicamos la misma logica que teniamos antes
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          let parsedItem
          const storageItem = localStorage.getItem(itemName)
          if(!storageItem){
            localStorage.setItem(itemName, JSON.stringify(defaultItem))
            parsedItem=defaultItem
          }else{
            parsedItem=JSON.parse(storageItem)
            setItems(parsedItem)
          }
          setLoading(false)
        }catch(error){
          console.log(error);
          setLoading(false)
          setError(true)
        }}, 2000)
        // eslint-disable-next-line
      }, [])
      //nueva forma de actualizar el estado
    function saveItem(newItemArray){
      const stringedArray = JSON.stringify(newItemArray)
      localStorage.setItem(itemName, stringedArray)
      setItems(newItemArray)
    }
    //retornamos ese estado y esa forma de actualizar el estado
    return {items, saveItem, loading, error}
}

export {useLocalStorage}
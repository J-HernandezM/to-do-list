import React from 'react';
//CUSTOM HOOK, ABSTRAER LOGICA PARA ALIVIANAR LA COMPLEJIDAD DEL COMPONENTE
function useLocalStorage(itemName, defaultItem){
    //aplicamos la misma logica que teniamos antes
    const storageItem = localStorage.getItem(itemName)
    let parsedItem
    if(!storageItem){
      localStorage.setItem(itemName, JSON.stringify(defaultItem))
      parsedItem=defaultItem
    }else{
      parsedItem=JSON.parse(storageItem)
    }
    //creamos un nuevo estado
    const [items, setItems] = React.useState(parsedItem)
    //y una nueva forma de actualizar el estado
    function saveItem(newItemArray){
      const stringedArray = JSON.stringify(newItemArray)
      localStorage.setItem(itemName, stringedArray)
      setItems(newItemArray)
    }
    //retornamos ese estado y esa forma de actualizar el estado
    return [items, saveItem]
}

export {useLocalStorage}
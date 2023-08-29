import React from 'react';
//CUSTOM HOOK, ABSTRAER LOGICA PARA ALIVIANAR LA COMPLEJIDAD DEL COMPONENTE
function useLocalStorage(itemName, defaultItem){
//Implementacion reducer
const [state, dispatch] = React.useReducer(reducer, initialState(defaultItem))

const {
  synchronized,
  items,
  loading,
  error} = state

//Action creators
const onError = (error)=>dispatch({type:actionTypes.error, payload: error})
const onSuccess = ()=>dispatch({type:actionTypes.sucess})
const onSynchronize = ()=>dispatch({type:actionTypes.synchronize})
const onSave = (item)=>dispatch({type:actionTypes.save, payload: item})


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
            onSave(parsedItem)
          }
          onSuccess()
        }catch(error){
          onError(error)
        }}, 2000)
        // eslint-disable-next-line
      }, [synchronized])
      //nueva forma de actualizar el estado
    function saveItem(newItemArray){
      const stringedArray = JSON.stringify(newItemArray)
      localStorage.setItem(itemName, stringedArray)
      onSave(newItemArray)
    }

    //Funcion de sincronizar, recargar
    function synchronize(){
      onSynchronize()
    }
    //retornamos ese estado y esa forma de actualizar el estado
    return {items, saveItem, loading, error, synchronize}
}

const initialState = (initialValue)=> {
  return({
    synchronized:true,
    items: initialValue,
    loading:true,
    error: false
  })
}

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  save2: 'SAVE2',
  synchronize: 'SYNCHRONIZE'
}

const reducerObject = (state, payload) =>{
  return({
    [actionTypes.error]: {
      ...state, 
      error: true,
      loading: false
    },
    [actionTypes.success]: {
      ...state, 
      synchronized: true,
      loading: false
    },
    [actionTypes.synchronize]:{
      ...state,
      loading: true,
      synchronized: false
    },
    [actionTypes.save]:{
      ...state,
      items: payload,
      loading: false,
      synchronized: true
    }
  })

}

const reducer = (state, action)=>{
  if(reducerObject(state)[action.type]){
      return reducerObject(state, action.payload)[action.type]
  }else{
      return state
  }
}

export {useLocalStorage}
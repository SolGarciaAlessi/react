import { NumbersTwoTone } from '@mui/icons-material'
import {useState, useEffect } from 'react'
import "./ItemListContainer.css"
// import CustomButton from '../customButton/CustomButton'

const ItemListContainer = ( { greeting } ) => {

  const [ isDark , setIsDark ] = useState (false)
  const [ num , setNum ] = useState (0)

  const tooggleMode = ()=>{

    setIsDark ( !isDark )
  }

  console.log(isDark)

  useEffect( ()=> {
    console.log( "hola dentro del primer efecto ")
  })
  useEffect( ()=> {
  console.log("hola desde el efecto con array de dependencia vacio")
} , [])
useEffect( ()=> {
  console.log("hola desde el efecto con array de dependencia a la escucha de NUM")
} , [num])
const onAdd = ()=>{
  console.log("hola") , []
}

 
  return (
    <div className={ isDark ? "container-item-dark" : "container-items" }>

        <h2>{greeting}</h2>

        {/* <CustomButton texto={"sumar"}/> */}

        <button onClick={tooggleMode} >{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>
        <button onClick={()=>setNum(num + 1)}>Sumar</button>
        <Counter stock={10} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer
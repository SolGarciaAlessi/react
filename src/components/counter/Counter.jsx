
import CustomButton from "../customButton/CustomButton"

import {useState} from "react"

const Counter = (stock, initial, onAdd) => {

    const  [counter, setCounter] = useState(initial)

  return (
    <div>
        <h2>{counter} </h2>
        <button>sumar</button>
        <button>restar</button>
        <button>agregar al carrito</button>

        {/* <CustomButton texto={"sumar"} counter={counter} setCounter={setCounter} /> */}
    </div>
    )
  }


export default Counter
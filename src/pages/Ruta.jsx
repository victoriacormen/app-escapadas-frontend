import { useParams, Link } from "react-router-dom"
import  escapadas  from "../assets/data/escapadas.json"

export default function Ruta() {
    const {id}=useParams()
    const escapada=escapadas[id]
  return (
    <>
    <div className="escapada">
        <p>{escapada.description}</p>
        <p>{escapada.fecha}</p>
        <img src={escapada.original}/>
        <div>{escapada.observaciones}</div>
    </div>
    
    </>
  )
}
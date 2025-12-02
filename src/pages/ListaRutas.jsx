import data from "../assets/data/escapadas.json"
import { Link } from "react-router-dom"

function ListaRutas() {
  return (
    <>
    <h2 className="titulo-lista">Estas son las escapadas  dia de hoy</h2>
    <div className="escapadas">
    {data.map((item,index)=>(
        <div key={index}>
            <figure>
                <img src={item.original}/>
            </figure>
          <Link to={`/ruta/${index}`}>{item.description}</Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ListaRutas

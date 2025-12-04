import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { useState, useRef, useEffect } from "react"
// import "leaflet/dist/leaflet.css"
import emailjs from "@emailjs/browser"

export default function AgregarRuta() {
    const formRef = useRef()

    const position = [40.4074, -3.6885]
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [propuesta, setPropuesta] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [precio, setPrecio] = useState(0)
    const [lat, setLat] = useState(position[0])
    const [lng, setLng] = useState(position[1])
    const [observaciones, setObservaciones] = useState('')
    const [respuesta, setRespuesta]=useState('')
    
    /* // creamos un objeto datos
    const dataForm = {
        nombre:nombre,
        email: email,
        propuesta:propuesta,
        fecha:fecha,
        precio: precio,
        latitud: lat,
        longitud:lng,
        observaciones:observaciones
    } */

    const submitEmail = async (e) => {
    e.preventDefault();
    setRespuesta("Enviando...")
    try {
      const result = await emailjs.sendForm(
        "service_unimyvf",     // ← pon tu SERVICE ID
        "template_gnkvitf",    // ← pon tu TEMPLATE ID
        formRef.current,
        "_2JS-iuwOPPqbmKzn"      // ← tu PUBLIC KEY
      );

      setRespuesta(result.text + "Mensaje enviado correcamente")

    } catch (error) {
      setRespuesta(result.text +"Hubo un error al enviar el correo");
    }
  }

    /* const handlerSubmit = (e) => {
        e.preventDefault();
         async function enviarDatos() {
                const request = await fetch('http://localhost:3000', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(dataForm)
                })
                const respuesta = await request.json()
                console.log(respuesta)
                setRespuesta(respuesta.mensaje)
            }
            enviarDatos()
    } */

    return (
        <>
        <h2>HAZ TU PROPUESTA DE RUTA!</h2>
         {respuesta && <p className="respuesta"> {respuesta}</p>}
            <div className="formCrearEsc">
                <form id="formulario" ref={formRef} onSubmit={submitEmail} >
                    <div >
                        <label htmlFor="nombre">Nombre coordinador:</label>
                        <input onChange={(e) => setNombre(e.target.value)} type="text" name="nombre" id="nombre" />
                    </div>
                    <div >
                        <label htmlFor="email">Email coordinador:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="propuesta">Propuesta</label>
                        <input onChange={(e) => setPropuesta(e.target.value)} type="text" name="propuesta" id="propuesta" />
                    </div>
                    <div>
                        <label htmlFor="fecha">Fecha</label>
                        <input onChange={(e) => setFecha(e.target.value)} type="date" name="fecha" id="fecha" />
                    </div>
                    <div id="latlng">
                        <label htmlFor="lat">Latitud</label>
                        <input onChange={(e) => setLat(e.target.value)} value={lat} type="text" name="lat" id="lat" />
                        <label htmlFor="lng">Longitud</label>
                        <input onChange={(e) => setLng(e.target.value)} value={lng} type="text" name="lng" id="lng" />
                    </div>
                    <div>
                        <label htmlFor="hora">Hora</label>
                        <input onChange={(e) => setHora(e.target.value)} type="time" name="hora" id="hora" />
                    </div>
                    <div>
                        <label htmlFor="precio">Precio</label>
                        <input onChange={(e) => setPrecio(e.target.value)} type="text" name="precio" id="precio" />
                    </div>
                    <div>
                        <label htmlFor="observaciones">Observaciones</label>
                        <textarea onChange={(e) => setObservaciones(e.target.value)} name="observaciones" id="observaciones"></textarea>
                    </div>
                    <button id="btn">Enviar</button>
                </form>
            </div>
        </>
    )
}
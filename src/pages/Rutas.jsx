import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import escapadas from "../assets/data/escapadas.json"

export default function Rutas() {
    const style={
        height:"250px"
    }
    const position= [40.5, -3.689]

    return (
    <>
    <div>
        <MapContainer style={style} center={position} zoom={8} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {escapadas.map((item, index)=>(
                <Marker key={index} position={item.latlong}>
                    <Popup>{item.description} el {item.fecha} a las {item.hora} por {item.precio}€</Popup>
                </Marker>
            ))}
        </MapContainer>
    </div>
    </>
  )
}
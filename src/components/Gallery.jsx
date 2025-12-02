import ImageGallery from "react-image-gallery"
import { Navigate, useNavigate, Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css"
import escapadas from "../assets/data/escapadas.json"



export default function Gallery() {
  const navigate= useNavigate()

  function redirigir(){
    navigate("/lista-rutas")
  }
  return (
    <>
    <div className="gallery">
        <ImageGallery className="img-gallery" items={escapadas} autoPlay={true} showBullets={true} thumbnailPosition="bottom" onClick={redirigir}/>
    </div>
    </>
  )
}
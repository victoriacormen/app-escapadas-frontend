import ImageGallery from "react-image-gallery"
import { Navigate, useNavigate } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css"
import escapadas from "../assets/data/escapadas.json"

/* const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description: "Propuesta 1"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description: "Propuesta 2"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description: "Propuesta 3"
  },
]; */

export default function Gallery() {
  const navigate= useNavigate()

  function redirigir(){
    navigate("/rutas")
  }

  return (
    <>
    <div className="gallery">
        <ImageGallery className="gallery" items={escapadas} autoPlay={true} showBullets={true} thumbnailPosition="bottom" onClick={redirigir}/>
    </div>
    </>
  )
}
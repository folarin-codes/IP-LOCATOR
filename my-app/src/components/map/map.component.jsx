import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useContext  } from 'react'

import { apiContext } from '../../context/api.context'
  
import './map.styles.css'

      
const Map = () => {
  
  const position = [0 , 0]

  const locationData = useContext(apiContext)

  const data = locationData[0]

  const {latitude , longitude} = data

  
  return (

  <>
      {latitude ? <MapContainer className='leaflet-container' center={latitude =='undefined' ? position : [latitude , longitude]} zoom={13} scrollWheelZoom={false} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={latitude =='undefined' ? position : [latitude , longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
      </MapContainer> : <div></div>}
      </>
      )
}

export default Map;
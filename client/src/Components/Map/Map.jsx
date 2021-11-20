import React,{ useState } from 'react'
import MapGL,{Marker} from 'react-map-gl'
import point from './point.png'
import truck from './truck.png'

import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN="pk.eyJ1IjoibmF2ZWVuNzgwMCIsImEiOiJja3c4NnJsbDAzMnp2MnZub2NiNW1ycmp1In0.taxZBadTM8BDnQHiS9z15w"

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "50%",
    height: 400,
    latitude: 26.9124,
    longitude: 75.7873,
    zoom: 5
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div>
      
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/naveen7800/ckw87wvaj1js914utnod77aln"
        onViewportChange={_onViewportChange}
      >
        <Marker latitude={27.3104} longitude={76.4389}>
          <img src={truck}  style={{width: '50px', height: '50px'}}/>
    </Marker>

    <Marker latitude={28.644800} longitude={77.216721}>
         <img src={point}  style={{width: '30px', height: '30px'}}/>
    </Marker>
       
      </MapGL>
    </div>
  )
}

export default Map
import React,{ useState } from 'react'
import MapGL,{Marker} from 'react-map-gl'
import point from './point.png'
import truck from './truck.png'

import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN="pk.eyJ1IjoibmF2ZWVuNzgwMCIsImEiOiJja3c4NnJsbDAzMnp2MnZub2NiNW1ycmp1In0.taxZBadTM8BDnQHiS9z15w"

const Map = ({lat1,lon1,lat2,lon2}) => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 509,
    latitude: 26.9124,
    longitude: 75.7873,
    zoom: 4
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
        <Marker latitude={lat1} longitude={lon1}>
          <img src={truck}  style={{width: '50px', height: '50px'}}/>
    </Marker>

    <Marker latitude={lat2} longitude={lon2}>
         <img src={point}  style={{width: '30px', height: '30px'}}/>
    </Marker>
       
      </MapGL>
    </div>
  )
}

export default Map
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: "105%",
      height: "60%",
      left: "115px",
      top: "125px",
    };
    return (
      <div style={{ position: "relative", width: "80vw", height: "110vh" }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 9.761927, lng: 79.95244 }}
        >
          <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);

// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import ContactComponent from '../../components/ContactComponent';
// export default class GoogleMapComponent extends React.Component {
//     static defaultProps = {
//         center: {lat: 40.73, lng: -73.93},
//         zoom: 12
//      }
//     render() {
//         return (
//             <GoogleMapReact
//                 //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//                 defaultCenter={this.props.center}
//                 defaultZoom={this.props.zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             >
//                 <AnyReactComponent
//                     lat={59.955413}
//                     lng={30.337844}
//                     text="My Marker"
//                 />
//             </GoogleMapReact>
//         )
//     }
// }

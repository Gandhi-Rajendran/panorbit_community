// import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

// export default function SimpleMap({ Lat, Lng }) {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 20,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={Lat} lng={Lng} text="My Marker" />
//       </GoogleMapReact>
//     </>
//   );
// }

import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import Spinner from "../spinner";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    // id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: 48.8584,
    lng: 2.2945,
  };

  if (isLoaded) {
    return <Spinner loading={isLoaded} />;
  }
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    ></GoogleMap>
  );
};

export default Map;

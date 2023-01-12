import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Spinner from "../spinner";

const Map = ({ Lat, Lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: Lat,
    lng: Lng,
  };

  return (
    <>
      {!isLoaded ? (
        <Spinner loading={isLoaded} />
      ) : (
        <GoogleMap
          center={center}
          zoom={2}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </>
  );
};

export default Map;

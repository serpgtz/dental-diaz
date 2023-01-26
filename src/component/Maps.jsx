import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker,LoadScript } from '@react-google-maps/api';


export default function Maps(){
  const { isLoaded} = useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_MY_GOOGLE_KEY
  });


  if (!isLoaded) return <div>Loading...</div>
  return <Map />;
}

const containerStyle = {
    width: '600px',
    height: '600px'
  };
  

function Map(){
  
  // 32.64199980523102, -115.43644635900554
  const center = useMemo(()=>({lat:32.6375902416205, lng:-115.43452783096583}),[]);
  return (
    <GoogleMap
    zoom={16}
    center={center}
    mapContainerStyle={containerStyle}>
      <Marker position={{lat:32.6375902416205, lng:-115.43452783096583}}/>
    </GoogleMap>
  );
}

// const containerStyle = {
//   width: '600px',
//   height: '600px'
// };
// // 32.61840500939858, -115.37299843183958
// const center = {
//   lat: 32.6184,
//   lng: -115.372998
// };

// const API= process.env.YOUR_API_KEY

// function MyComponent() {
//   return (
//     <LoadScript
//       googleMapsApiKey={API}
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={16}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(MyComponent)
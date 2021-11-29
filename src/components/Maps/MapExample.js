import React from "react";

function MapExample() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "38.8704816";
    let lng = "-121.2978854";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 5 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified"}],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#4299e1" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "<b>Get Axed</b>",
      icon: "https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2Flogo-image-sm.png?alt=media&token=95df2629-9e9e-4b09-8615-5857160c5e58"
    });

    const contentString =
      '<div class="info-window-content"><h2 style="font-weight:bolder !important;">Get Axed</h2>' +
      `<p><a href="https://www.google.com/maps/dir/?api=1&amp;destination=721%20Sterling%20Pkwy,%20Lincoln,%20CA%2095648,%20USA" target="_blank">Directions</a></p></div>`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div className="relative w-full rounded h-500-px">
        <div className="rounded h-full" ref={mapRef} />
      </div>
    </>
  );
}

export default MapExample;

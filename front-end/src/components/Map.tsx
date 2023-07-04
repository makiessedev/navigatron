import {
  Marker,
  GoogleMap,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from '@react-google-maps/api'

export function Map() {
  return (
    <iframe
      className="h-full w-full"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15767.330182993046!2d13.2548163!3d-8.89515585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1688304096798!5m2!1spt-PT!2sao"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
}

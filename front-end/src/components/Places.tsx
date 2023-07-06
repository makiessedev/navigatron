/* eslint-disable no-undef */
import { MapContext } from '@/Context/useMapContext'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import { useContext } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

type PlacesProps = {
  setOffice: (positios: google.maps.LatLngLiteral) => void
}

export function Places(p: PlacesProps) {
  const { setOffice } = useContext(MapContext)
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()

  const handleSelect = async (value: string) => {
    setValue(value)
    clearSuggestions()

    const results = await getGeocode({ address: value })
    const { lat, lng } = getLatLng(results[0])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    setOffice({ lat, lng })
  }

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        className="w-full p-1"
        placeholder="Pesquisa seu destino"
      />
      <ComboboxPopover className="bg-blue-900">
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

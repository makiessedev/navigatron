/* eslint-disable no-undef */
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'

type PlaceProps = {
  setOffice: (position: google.maps.LatLngLiteral) => void
}

export function Places({ setOffice }: PlaceProps) {
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()

  const handleSelect = async (value: string) => {
    setValue(value, false)
    clearSuggestions()

    const results = await getGeocode({ address: value })
    const { lat, lng } = await getLatLng(results[0])

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
      <ComboboxPopover>
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

// className="h-10 max-w-[90%] rounded-full px-4 shadow-lg focus:outline-none"

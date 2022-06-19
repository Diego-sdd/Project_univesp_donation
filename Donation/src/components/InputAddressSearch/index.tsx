import React from 'react';
import PropTypes from 'prop-types';

import {Label, AddressSearch} from './styles';

interface Type {
  required?: boolean;
  onPress: (data: any, details: any) => void;
  label?: string;
}

const InputAddressSearch: React.FC<Type> = ({required, onPress, label}) => {
  return (
    <>
      {!!label && (
        <Label>
          {label}
          {required && '*'}
        </Label>
      )}

      <AddressSearch
        fetchDetails
        autoCompleteType="off"
        placeholder="Buscar endereço"
        minLength={4} // minimum length of text to search
        autoFocus={false}
        listViewDisplayed="auto" // true/false/undefined
        renderDescription={(row: any) => row.description} // custom description render
        onPress={onPress}
        getDefaultValue={() => ''}
        enablePoweredByContainer={false}
        query={{
          key: '',
          language: 'pt-BR', // language of the results
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          type: 'cafe',
        }}
        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: ['formatted_address', 'geometry'],
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        predefinedPlaces={[]}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        // {...rest}
      />
    </>
  );
};

InputAddressSearch.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

InputAddressSearch.defaultProps = {
  label: '',
  required: false,
};

export default InputAddressSearch;

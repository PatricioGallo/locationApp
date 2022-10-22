import React from 'react'
import { Children } from 'react';
import { Image, View } from 'react-native'
import { URL_MAPS } from '../../utils/maps'
import { styles } from './style';

const MapPreview = ({children, location,style}) => {

    const {lat,lng} = location || {};
    const mapPreviewUrl = URL_MAPS(lat,lng);

  return (
    <View style={style}>
        {location ? 
            <Image 
                style={styles.mapImage}
                source={{uri: mapPreviewUrl}}
            />
        :
            children
    }
    </View>
  )
}

export default MapPreview
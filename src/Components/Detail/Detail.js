import React from 'react'
import { Image, ScrollView, View, Text} from 'react-native'
import { useSelector } from 'react-redux';
import MapPreview from '../MapPreview/MapPreview';
import { styles } from '../Detail/style';

const Detail = ({placeID}) => {
    const place = useSelector(state => state.place.places.find(item => item.id === placeID))
  return (
    <ScrollView style={styles.container}>
        <Image source={{uri: place.image}} style={styles.image}/>
        <View style={styles.location}>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>{place.address}</Text>
            </View>
            <MapPreview 
                style={styles.map} 
                location = {{lat: place.lat, lng: place.lng}}
            >
                <Text>Ubicacion no disponible.</Text>
            </MapPreview>
        </View>
    </ScrollView>
  )
}

export default Detail;
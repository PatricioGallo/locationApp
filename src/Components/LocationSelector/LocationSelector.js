import React, { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { styles } from './style';
import colors from '../../utils/colors';
import * as Location from 'expo-location';
import MapPreview from '../MapPreview/MapPreview';

const LocationSelector = ({onLocation}) => {
    const [location, SetLocation] = useState();

    const locationFunction = async () =>{
        const permission = await locationPermission();

        if(permission === false) return;

        const loc = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        SetLocation({
            lat: loc.coords.latitude,
            lng: loc.coords.longitude,
        })
        onLocation({
            lat: loc.coords.latitude,
            lng: loc.coords.longitude,
        });

    };

    const locationPermission = async () =>{
        const {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted'){
            Alert.alert('Permisos insuficientes', 'Necesita permisos para usar la aplicaciones',[{text: "ok"}])
            return false;
        }
        return true;
    }


  return (
    <View style={styles.container}>
        <MapPreview style={styles.preview} location={location}>
          <Text>Ninguna ubicacion seleccionada aun.</Text>
        </MapPreview>
        <Button 
            title="Get location"
            color={colors.secondary}
            onPress={locationFunction}
        />
    </View>
  )
}

export default LocationSelector;
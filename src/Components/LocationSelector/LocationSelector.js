import React, { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { styles } from './style';
import colors from '../../utils/colors';
import * as Location from 'expo-location';
import MapPreview from '../MapPreview/MapPreview';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

const LocationSelector = ({onLocation}) => {
    
    const navigation = useNavigation();
    const [location, SetLocation] = useState();
    const route = useRoute();
    const {mapLocation} = route.params || {};

    useEffect(()=>{
        if(mapLocation){
            SetLocation(mapLocation)
            onLocation(mapLocation)
        }
    },[mapLocation])


    const mapFunction = async () =>{
        const permission =  await locationPermission();

        if(permission === false) return;

        const loc = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });
        navigation.navigate("Maps",{lat: loc.coords.latitude, lng: loc.coords.longitude});
   };


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
        <View style={styles.botoenes}>
            <Button 
                title="Buscar en el mapa"
                color={colors.secondary}
                onPress={mapFunction}
            />
            <Button 
                title="Obtener ubicacion"
                color={colors.secondary}
                onPress={locationFunction}
            />
        </View>
    </View>
  )
}

export default LocationSelector;
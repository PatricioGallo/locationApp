import React, { useState } from 'react'
import { Alert, Button, Image, Text, View } from 'react-native'
import { styles } from './style';
import colors from '../../utils/colors';
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = ({onImage}) => {
    const [picUrl, setPicUrl] = useState();

    const OnPhoto = async () =>{
        const permission = await photoPermission();

        if(permission === false) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8
        });

        setPicUrl(image.uri);
        onImage(image.uri);

    };

    const photoPermission = async () =>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync();

        if(status !== 'granted'){
            Alert.alert('Permisos insuficientes', 'Necesita permisos para usar la aplicaciones',[{text: "ok"}])
            return false;
        }
        return true;
    }


  return (
    <View style={styles.container}>
        <View style={styles.preview}>
            {!picUrl ?
                <Text>Ninguna imagen seleccionada.</Text>
                :
                <Image 
                    style={styles.imageStyle}
                    source={{uri: picUrl}}
                />
            }
        </View>
        <Button 
            title="Tomar una foto"
            color={colors.secondary}
            onPress={OnPhoto}
        />
    </View>
  )
}

export default ImageSelector
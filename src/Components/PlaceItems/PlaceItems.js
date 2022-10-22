import React from 'react'
import { Image, TouchableOpacity, View , Text} from 'react-native';
import { styles } from './style';

const PlaceItems = ({title,image,address, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={onSelect}
          style={styles.touchable}
      >
          <Image style={styles.image} source={{uri: image}} />
          <View style={styles.info}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.address}>{address}</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

export default PlaceItems
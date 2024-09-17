import React from "react";
import styles from '../styles/AppStyles';
import { View, Text, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa( {data, deleteItem} ){
  return(
    <View style={styles.containerTarefa}>

      <Text style={styles.textTarefa}>
        {data.item}
      </Text>

      {/* button lixeira */}
      <TouchableOpacity style={styles.buttonTarefa} onPress={deleteItem}>
        <FontAwesome 
          name="trash"
          size={20}
          color={'#DC143C'}
        />
      </TouchableOpacity>

    </View>
  )
}
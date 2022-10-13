import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Read({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Read
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity 
                    title='Update'
                    onPress={()=> navigation.navigate('Update')}
                    style={styles.botao}
                >
                    <Text style={styles.txtButton}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
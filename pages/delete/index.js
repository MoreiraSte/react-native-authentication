import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Delete({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Delete
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity 
                    title='Home'
                    onPress={()=> navigation.navigate('Home')}
                    style={styles.botao}
                >
                    <Text style={styles.txtButton}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
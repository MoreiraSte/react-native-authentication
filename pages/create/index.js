import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Create({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Create
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity 
                    title='Read'
                    onPress={()=> navigation.navigate('Read')}
                    style={styles.botao}
                >
                    <Text style={styles.txtButton}>Read</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
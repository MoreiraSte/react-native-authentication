import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'


export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Home
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.botao}
                >
                    <Text style={styles.txtButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
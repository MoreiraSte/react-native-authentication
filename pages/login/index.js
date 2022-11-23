import React,{useEffect, useState} from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { Button } from 'react-native-web';
import styles from './styles';
import { auth,logInWithEmailAndPassword } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[user,loading,error] = useAuthState(auth)

    const navigate = useNavigation()

    // quando a pagina recarregar, se estiver em loading vai retornar o que tem de acordo com a configuarção do firebase no arquivo js, se 
    // reconhecer o usuario, irá navegar até a pagina create.
    useEffect(() => {
        if(loading){
            return;
        }
        if(user) navigate.navigate('Create')
    },[user,loading])
     // criando uma constante para guardar a função que possui o registro que é o email e password
    const loginFire = () => {
        logInWithEmailAndPassword(email,password);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Login
            </Text>
            
              <View >
                <TextInput
                    placeholder='e-mail'
                    keyboardType='text'
                    value={email}
                    style={styles.txtInput}
                    onChangeText={(e) => {setEmail(e)}}
                />
                <TextInput
                    placeholder='password'
                    style={styles.txtInput}
                    keyboardType='password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(a) => {setPassword(a)}}

                />
                <View>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={()=>loginFire()}
                >
                    <Text>Log in</Text>
                </TouchableOpacity>
              </View>

            </View>
        </View>
    )
}

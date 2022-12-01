import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import styles from './styles'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../login/firebaseConfig'

export default function Update({ route, navigation }) {

    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [foto, setFoto] = useState()
    const [cfoto, setCFoto] = useState()
    const [textoNome, setTextoNome] = useState()
    const [textoEmail, setTextoEmail] = useState()
    const [acesso, setAcesso] = useState()
    
    // O useEffect é um hook do React. Ele permite você execute efeitos colaterais no seu código.
    //  Mas o que seriam esses efeitos colaterais? Buscar dados de uma API, mudar a DOM,
    //   ou configurar uma subscription, por exemplo, são algumas opções de efeitos colaterais no seu código.
    //vai executar toda vez que a página carregar
    useEffect(()=>{
        // se for diferente de null vai setar os parametros, se entrar sem parametro ele nao vai pedir parametro,se ele entrar com parametro ele vai pedir, nao vai abrir uma pagina sem nada
        if(route.params!=null){
            setId(route.params.id)
            setNome(route.params.name)
            setEmail(route.params.email)
            setFoto(route.params.image)
            setAcesso(doc(db,'alunos',route.params.id))
        }
    },[])

    // aqui esta criando uma constante assincrona, onde usa o updateDoc para atualizar os dados do banco, onde o acesso guarda o nome e email para ser atualizado
    // quando o botão é pressionado
    const salvar = async()=>{
        await updateDoc(acesso, {
            'name':textoNome,
            'email':textoEmail,
            // foto:foto
        });
    }
    
    // repositorio e media são os links que compoe o caminho da imagem
    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/app-native-3f609.appspot.com/o/images%2F'
    const media = '?alt=media'
    
    return (
        <View style={styles.container}>
            <View style={styles.foto0}>
                <img src={repositorio+foto+media} style={styles.foto1}/>
            </View>
            {/* o onChangeText serve nesse caso para transformar o nome que está ai com o nome em uma caixa de texto para que o usuario possa
            alterar e atualizar o nome */}
            <Text>
                Nome:
                
                <TextInput
                onChangeText={(e)=>{setTextoNome(e)}}
                value={textoNome}
                placeholder={nome}
                />
            <Text>{textoNome}</Text>
            </Text>
            <Text>
                Email:
                <TextInput
                onChangeText={(e)=>{setTextoEmail(e)}}
                value={textoEmail}
                placeholder={email}
                />
                <Text>{textoEmail}</Text>
            </Text>
            {/* <Text>
                Foto:{foto}
            </Text> */}

            <View style={{width:150,height:40,backgroundColor:'#000',color:'#fff'}}>
                <TouchableOpacity
                    onPress={()=>{salvar()}}
                    >
                    <Text style={{color:'white'}}>Salvar</Text>
                </TouchableOpacity>
            </View>
           
          
                
            

            
        </View>
    )
}

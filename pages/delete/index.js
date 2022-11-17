import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles'
import {FontAwesome} from '@expo/vector-icons'
import {db} from '../login/firebaseConfig'
import {doc, deleteDoc, getDocs, collection} from 'firebase/firestore'
import { async } from '@firebase/util';
import { BaseNavigationContainer } from '@react-navigation/native';


export default function Delete({navigation}){

    const [page,setPage] = useState([])

    function deleteItem(id){
        deleteDoc(doc(db,'alunos',id));
        //  deleteDoc é um componente do firebase firestore/ 
        //  doc é cada item do banco de dados/ 
        //  collection é o banco de dados, escolho cada coisa do banco/ getdoc é para pegar o banco/
        //   db é o banco de dados, uma constante chamada db que faz getfirestore, que pega o banco onde ele existe
    }

    useEffect(async()=>{
        // uma constante que guarda os dados que o getDocs pega da coleção de bancos de dados, pegando em db o banco alunos
        const querySnapshot = await getDocs(collection(db,'alunos')); 
        // uma constante armazena uma lista
        const list=[]
        // usando um forEach, vamos andar por todo banco de dados, usando o doc que anda por cada elemento do banco. atualizando a lista com os dados e os ids dos elementos
        querySnapshot.forEach((doc)=>{
            list.push({...doc.data(), id: doc.id})
        });
        // Aqui ele esta setando a lista na pagina
        setPage(list)
    },[])

    return(
        // A view é como uma div, é a parte de front
        <View style={styles.container}>
            {/* O text é um espeço de texto */}
            <Text style={styles.texto1}>
                Delete
            </Text>
            {/* FlatList é um tipo de lista */}
            <FlatList
            // Aqui guardamos a lista que setamos na page em data, renderizando o item que esta na lista para usarmos no on press
                data={page}
                renderItem={({item})=>{
                    return(
                        <View style={styles.pageDelete}>
                            {/* TouchableOpacity é um botão */}
                            <TouchableOpacity 

                                style={styles.deleteItem}
                                // Aqui é uma ação de clique na lixeira, em que quando for pressionado, deleta o item do banco
                                onPress={()=>{deleteItem(item.id)}}
                            
                            >
                                <FontAwesome
                                    name='trash'
                                    size={25}
                                    color='#ff0'
                                />
                                    

                            </TouchableOpacity>
                            <Text
                                style={styles.txtDelete}
                                // O onPress navega até a página update levando o id, nome e email para outra página
                                onPress={()=>{
                                    navigation.navigate("Update", {
                                        id:item.id,
                                        name:item.name,
                                        email:item.email,
                                        image:item.image
                                    })
                                }}
                            >
                                {item.name} - {item.email}
                                </Text>

                           
                            </View>
                    )
                }}
            
            />
            
        </View>
    )
}
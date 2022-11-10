import React,{useEffect,useState} from 'react';
import { View, Text, TouchableOpacity ,FlatList} from 'react-native';
import styles from './styles'
import {FontAwesome} from '@expo/vector-icons'
import {db} from '../login/firebaseConfig'
import { collection,getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';

export default function Read({navigation}) {

    const [page,setPage]= useState([])

    useEffect(async()=>{
        const querySnapshot = await getDocs(collection(db,'alunos'));
        const list=[]
        querySnapshot.forEach((doc)=>{
            list.push({...doc.data(), name: doc.data().name, email:doc.data().email})
        });

        setPage(list)
    },[])

    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/app-native-3f609.appspot.com/o/images%2F'
    const media = '?alt=media'

    return (
       <View style={styles.container}><Text style={styles.texto1}>Read</Text>
            <FlatList
                numColumns={2}
                data={page}
                renderItem = {({item})=>{
                    return(
                        <View style={styles.pageLista} >
                            <View style={styles.foto20} >
                            <TouchableOpacity
                               
                                onPress={()=>{navigation.navigate('Update'),{id:item.id,name:item.name,email:item.email,image:item.image}}}
                                >                                
                                <img src={repositorio + item.image + media} style={styles.foto30}/>
                                
                                
                                <Text 
                                >
                                    {item.name}
                                </Text>                
                                <Text 
                                >
                                    {item.email}
                                </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
       </View>
    )
}
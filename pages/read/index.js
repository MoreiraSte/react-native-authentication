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

    return (
       <View style={styles.container}><Text style={styles.texto1}>Read</Text>
            <FlatList
                data={page}
                renderItem = {({item})=>{
                    return(
                        <View style={styles.pageLista}>

                            <View>

                                    <Text style={{paddingLeft:20}}>
                                        <FontAwesome
                                            name='user'
                                            size={25}
                                            color='#000'
                                        />
                                    </Text>
                            </View>
                            <View style={{paddingLeft:10}}>
                                <Text style={styles.txtLista}
                                onPress={()=>{navigation.navigate('Update'),{id:item.id,name:item.name}}}
                                >
                                    {item.name} - {item.email}

                                </Text>
                                
                            </View>

                        </View>
                    )
                }}
            />
       </View>
    )
}
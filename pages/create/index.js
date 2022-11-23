//             firebase storage react native
//             blog.logrocket.com/firebase-cloud-storage-firebase-v9-react/

import React, { alert, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './styles'

import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage, db } from '../login/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'




export default function Create({ navigation }) {
  const [texto, setTexto] = useState()
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [progresspercent, setProgresspercent] = useState(0)
  const [imgUrl, setImgUrl] = useState()
  const [image, setImage] = useState('')
  const [preview, setPreview] = useState('')

  // ########################### IMAGEM ########################################
  // let mFoto = ""
  // vai fazer a ação toda vez que a pagina recarregar, se não houver a imagem ou for diferente de uma imagem, retorna undefined
  useEffect(() => {
    if (!image) {
      setPreview(undefined)
      return
    }
    // cria uma constante que tem a url do objeto criado, que é a imagem e guarda a preview dessa imagem
    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

     // e por fim retorna revokeurl, que é o objeto criado em createobjecturl para ser usado por mais tempo no browser
    return () => URL.revokeObjectURL(objectUrl)
  }, [image])
  // ########################### FIM IMAGEM ####################################


  const upload = e => {
    // previne erros no evento
    e.preventDefault()
    const file = image

    if (!file) {
      console.log('Faltou imagem')
      return
    }
    if (!nome) {
      console.log('Faltou nome:')
      return
    }
    if (!email) {
      console.log('Faltou email')
      return
    }

    if (image == null) return

    const storageRef = ref(
      storage,
      `images/${nome.replace(/ +/g, '') + '_' + image.name}`
    )

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setTimeout(()=>{setProgresspercent(progress)}, 1000)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setImgUrl(downloadURL)
        })
      }
    )
    adicionar()
  }



  async function adicionar() {
    await addDoc(collection(db, 'alunos'), {
      name: nome,
      email: email,
      status: false,
      image: nome.replace(/ +/g, '') + '_' + image.name
    })

    setNome('')
    setEmail('')
    setTexto('Cadastrado com sucesso')
    setPreview(undefined)
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.texto1}>Create</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto2}>Cadastro</Text>

        <View style={styles.top1}>
          <View style={{ paddingBottom: 10, paddingTop: 10 }}>
            <TextInput
              style={styles.caixa1}
              placeholder='Nome'
              value={nome}
              onChangeText={e => {
                setNome(e)
              }}
            />
          </View>
          <View style={{ paddingBottom: 10, paddingTop: 10 }}>
            <TextInput
              style={styles.caixa1}
              placeholder='Email'
              value={email}
              onChangeText={e => {
                setEmail(e)
              }}
            />
          </View>
        </View>

        <View style={{ padding: 10, alignItems: 'center' }}>
          <img src={preview} style={styles.foto} />
        </View>

        <View style={styles.fundo}>
          <input
            type='file'
            onChange={e => {
              setImage(e.target.files[0])
            }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ paddingBottom: 10, paddingTop: 10, width: '30%' }}>
            <TouchableOpacity style={styles.botaoTabela} onPress={upload}>
              <Text style={styles.texto2}>Upload</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textSucesso}>
            <Text style={{ color: '#33F', fontSize: 20 }}>{texto}</Text>
          </View>

          <View>
            <View style={{ backgroundColor: '##00cade', width: `${progresspercent}%` }}>
              <Text>{progresspercent}%</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  )
}

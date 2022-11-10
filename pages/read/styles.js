import { StyleSheet ,Dimensions} from "react-native";

const {largura, altura} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#088',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto1:{
        fontSize:50,
    },
    botao: {
        width: '60%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: '100%',
        height: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
    pageLista:{
        width:largura/2.5,
        height:altura/5,
        borderRadius:10,
        margin:10,
        padding:5,
        alignItems:'center'
    },
    txtLista:{
        width:150,
        height:30,
        alignContent:'flex-start',
        backgroundColor:'#eee',
        borderRadius:5,
        color:'#444',
        fontSize:12,
        padding:5
    },
    foto20:{
        padding:10,
        alignItems:'center',
        backgroundColor:'#eee',
        borderRadius:10
        

    },
    foto30:{
        width:150,
        height:150,
        backgroundColor: '#5f5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    }
})

export default styles
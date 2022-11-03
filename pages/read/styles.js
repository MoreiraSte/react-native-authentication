import { StyleSheet } from "react-native";

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
        width:'90%',
        flexDirection:'row',
        marginTop:10,
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
    }
})

export default styles
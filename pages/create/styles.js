import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0C4DE',
    },
    container1: {
        flex: 0.2,
        width: '100%',
        alignItems: "center",
    },
    container2: {
        backgroundColor: '#00C4DE',
        width: '100%',
        flex: 1.5,
        padding: 20,
    },
    texto1: {
        fontSize: 50,
        color: '#000'
    },
    texto2: {
        fontSize: 15,
        color: '#333',
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
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
    caixa1: {
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '100%',
        padding: 10,
    },
    campo:{
        padding:10,
    },
    botaoTabela: {
        backgroundColor: '#B0C4DE',
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    fundo: {
        paddingBottom: 10,
        paddingTop: 2,
        alignItems: 'center',
    },
    foto: {
        width: 150,
        height: 150,
        backgroundColor: '#B0C4DE',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    top1: {
        flexDirection: "column",
    }
})

export default styles
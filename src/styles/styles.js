import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerTitulo:{
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    containerAdicionar:{
        padding: 10,
        margin: 20,
    },
    tituloAdicionar:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    input:{
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 3,
        height: 30,
        padding: 2,
        marginBottom: 5,
        backgroundColor: '#cccccc',
    },
    botaoAdicionar:{
        width: 60,
        height: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 2,
        marginTop: 7,
        alignItems: 'flex-end',
        backgroundColor: 'purple',
        padding: 5,
    },
    containerConteudo:{
        flex: 4,
        margin: 20,

    },
    containerLista:{
        padding: 5,
        justifyContent: 'space-around',
        margin: 4,

    },
    containerTituloLista:{
        margin: 2,
        padding: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 2,
        height: 30,
        flexDirection: 'row',
    },
    lista:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    containerOpcoes:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
    },
    botao:{
        marginRight: 2,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 2,
        padding: 5,
    },
});

export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
      flexDirection: 'column',
      alignItems: 'center',
      flex:1,
    },
    topView: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    bottomView: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    boxTop: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    boxBottom: {
        width: 300,
        height: 180,
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 20,
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'maroon'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
    btnContainer:{
        width: 80,
        height: 40,
        backgroundColor: 'maroon',
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },

});

export default styles;
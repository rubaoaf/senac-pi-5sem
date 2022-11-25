import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
      flexDirection: 'column',
      alignItems: 'center',
      flex:1,
      backgroundColor: 'rgba(255,255,255,0.6)',
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
        width: 350,
        height: 150,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    boxBottom: {
        width: 400,
        height: 180,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#008b8b',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    btnContainer:{
        width: 350,
        height: 40,
        backgroundColor: '#008b8b',
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },

});

export default styles;
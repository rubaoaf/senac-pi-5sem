import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        paddingVertical: '2%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    linha:{
      flexDirection: 'row', 
      justifyContent: 'space-around',
    },
    coluna:{
        flexDirection: 'column', 
        justifyContent: 'space-around',
    },
    imagem:{
        width: 25,
        height: 25,
    },
    texto:{
        fontFamily: 'Dosis_400Regular',
        fontSize: 20,
        marginHorizontal: '1%',
    },    
});

export default styles;
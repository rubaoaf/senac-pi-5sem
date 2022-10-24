import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './LoginStyle';

export default function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function validaEmail(email) {

        setEmail(email);
    }

    function validaSenha(senha) {

        setSenha(senha);
    }
 
    function direciona() {

        if (email == 'abc') navigation.navigate( 'HomeCliente', {paramKey: email } );
        
        if (email !== 'abc') navigation.navigate( 'HomeProf', {paramKey: email } );
    
    }

    return (

        <ImageBackground style={styles.container}

            source={require('../../assets/pexels-olya-kobruseva-5417622.jpg')}>

            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container} >

                <View style={styles.topView}>

                    <View style={styles.boxTop}>
                        <MaterialIcons name='support-agent' size={60} color='maroon' />
                        <Text style={styles.textLogo}> Secretari-e </Text>    
                    </View>
                
                </View>

                <View style={styles.bottomView}>
                
                    <View style={styles.boxBottom}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => validaEmail(value)}
                            value={email}
                            placeholderTextColor='#707070'
                            placeholder='e-mail'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => validaSenha(value)}
                            value={senha}
                            placeholderTextColor='#707070'
                            placeholder='Senha'
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity 
                        style={styles.btnContainer} 
                        onPress={() => direciona() } >      
                            <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        </ImageBackground>
    )
}
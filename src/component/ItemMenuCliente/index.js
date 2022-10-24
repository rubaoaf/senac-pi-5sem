import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../ComponentStyle';

export default function ItemMenuCliente( props ) {

    const navigation = useNavigation();

    let skip = '';
    let titulo = 'Cliente';
    let nome = filterNome(props.nome);
    let telefone = props.telefone;
    let data = props.data;
    let horario = props.horario;

    function filterNome(nome)
    {
        if(nome.length < 40){
            return nome;
        }
        return `${nome.substring(0, 40)}...`;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate( 'DetailCliente', {params: skip, titulo, nome, telefone, data, horario} )} >
            <View style={styles.linha}>
                <Image style={styles.imagem} source={props.img} />
                <View style={styles.coluna}>
                    <Text style={styles.texto}> Cliente: {nome} </Text>
                    <Text style={styles.texto}> Telefone: {telefone} </Text>
                    <Text style={styles.texto}> Data: {data} </Text>
                    <Text style={styles.texto}> Horario: {horario} </Text>
                </View>
            </View>
        </TouchableOpacity>
    ); 
}
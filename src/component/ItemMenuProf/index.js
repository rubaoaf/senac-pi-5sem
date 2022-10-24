import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../ComponentStyle';

export default function ItemMenuProf( props ) {

    const navigation = useNavigation();

    let skip = '';
    let titulo = 'Profissional';
    let nome = filterNome(props.nome);
    let especialidade = props.especialidade;
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
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate( 'DetailProf', {params: skip, titulo, nome, especialidade, data, horario} )} >
            <View style={styles.linha}>
                <Image style={styles.imagem} source={props.img} />
                <View style={styles.coluna}>
                    <Text style={styles.texto}> Profissional: {nome} </Text>
                    <Text style={styles.texto}> Especialidade: {especialidade} </Text>
                    <Text style={styles.texto}> Data: {data} </Text>
                    <Text style={styles.texto}> Horario: {horario} </Text>
                </View>
            </View>
        </TouchableOpacity>
    ); 
}
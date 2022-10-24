import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ItemMenuCliente from '../../component/ItemMenuCliente';
import styles from '../HomeStyle';

export default function HomeCliente( { route } ) {

    return (

        <View style={styles.container}>

            <View>
                <Text style={[styles.cabec1]}>Olá {route.params.paramKey}</Text>
            </View>

            <View>
                <Text style={[styles.cabec2]}>Agendamentos</Text>
            </View>

            <ScrollView>

                <ItemMenuCliente 
                    img={require('../../assets/favicon.png')}
                    nome='Benedito Ferreira'
                    telefone='9812-1212'
                    data='25/11/2022'
                    horario='8h30'
                ></ItemMenuCliente>

                <ItemMenuCliente 
                    img={require('../../assets/favicon.png')}
                    nome='Valquíria de Souza'
                    telefone='9834-3434'
                    data='25/11/2022'
                    horario='14h30'
                ></ItemMenuCliente>

                <ItemMenuCliente 
                    img={require('../../assets/favicon.png')}
                    nome='Peterson Albuquerque'
                    telefone='9898-9898'
                    data='13/12/2022'
                    horario='11h'
                ></ItemMenuCliente>
            
            </ScrollView>

        </View>
    )
}
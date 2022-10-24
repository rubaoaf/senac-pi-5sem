import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ItemMenuProf from '../../component/ItemMenuProf';
import styles from '../HomeStyle';

export default function HomeProf( { route } ) {

    return (

        <View style={styles.container}>

            <View>
                <Text style={[styles.cabec1]}>Olá {route.params.paramKey}</Text>
            </View>

            <View>
                <Text style={[styles.cabec2]}>Agendamentos</Text>
            </View>

            <ScrollView>

                <ItemMenuProf 
                    img={require('../../assets/favicon.png')}
                    nome='Dr. Eliseu Duarte'
                    especialidade='psicólogia'
                    data='25/11/2022'
                    horario='8h30'
                ></ItemMenuProf>

                <ItemMenuProf
                    img={require('../../assets/favicon.png')}
                    nome='Dra. Carmem Siqueira'
                    especialidade='psicólogia'
                    data='25/11/2022'
                    horario='14h30'
                ></ItemMenuProf>

                <ItemMenuProf
                    img={require('../../assets/favicon.png')}
                    nome='Dra. Amanda Soares'
                    especialidade='fisioterapia'
                    data='13/12/2022'
                    horario='11h'
                ></ItemMenuProf>
            
            </ScrollView>
        
        </View>
    )
}
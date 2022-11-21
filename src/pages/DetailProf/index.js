import React from "react";
import { View, Text} from 'react-native';
import styles from '../DetailStyle';

export default function DetailProf( { route } ) {

  return (
    <View style={styles.coluna}>
      <Text style={styles.titulo}>Detalhe do Profissional </Text>
      <Text style={styles.texto}>Nome: {route.params.nome} </Text>
      <Text style={styles.texto}>Especialidade: {route.params.especialidade} </Text>
      <Text style={styles.texto}>Data: {route.params.data} </Text>
      <Text style={styles.texto}>Horario: {route.params.horario} </Text>
      <Text style={styles.texto}>Endereço de Atendimento:</Text>
      <View tyle={styles.coluna}>
        <Text style={styles.texto}>Rua Estônia, número 50</Text>
        <Text style={styles.texto}>Telefone (11) 98282-1717</Text>
      </View>
    </View>
  );
}
import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../DetailStyle";

export default function DetailCliente({ navigation, route }) {
  return (
    <View style={styles.coluna}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text style={styles.titulo}>Detalhe do Cliente </Text>
      <Text style={styles.texto}>Nome: {route.params.nome} </Text>
      <Text style={styles.texto}>Telefone: {route.params.telefone} </Text>
      <Text style={styles.texto}>Data: {route.params.data} </Text>
      <Text style={styles.texto}>Horario: {route.params.horario} </Text>
    </View>
  );
}

import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AddSchedule = ({ route }) => {
  const navigation = useNavigation();
  const { userId, userName } = route.params;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Agendar", { userId: userId, userName: userName })
      }
      style={styles.button}
    >
      <MaterialIcons name="add" size={60} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#008B8B",
    borderRadius: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    bottom: 20,
    right: 20,
  },
});
export default AddSchedule;

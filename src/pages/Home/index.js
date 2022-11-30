import React from "react";
import { SafeAreaView, ScrollView, ImageBackground } from "react-native";
import SchuduledItem from "../../component/SchuduledItem";
import styles from "../HomeStyle";
import Header from "../../component/Header";
import AddSchedule from "../../component/AddSchedule";

import useSWR from "swr";
import fetch from "../../libs/fetch";

export default function Home({ route }) {
  const { userId, userName, post } = route.params;
  React.useEffect(() => {
    console.log({ userId, userName, post });
    if (post) {
      mutate(`http://localhost:3001/api/agendamentos/${userId}`);
    }
  }, [post]);
  const { data, mutate } = useSWR(
    `http://localhost:3001/api/agendamentos/${userId}`,
    fetch
  );

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/pexels-olya-kobruseva-5417622.jpg")}
    >
      <Header title={`Olá ${userName}`} description="Agendamentos" />
      <SafeAreaView style={styles.box}>
        <ScrollView style={styles.scrollView}>
          {data
            ? data.scheduling.map((elm) => (
                <SchuduledItem
                  key={elm.id}
                  img={require("../../assets/favicon.png")}
                  {...elm}
                />
              ))
            : "Carregando"}
        </ScrollView>
        <AddSchedule route={route} />
      </SafeAreaView>
    </ImageBackground>
  );
}

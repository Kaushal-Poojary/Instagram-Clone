import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});

export default HomeScreen;
